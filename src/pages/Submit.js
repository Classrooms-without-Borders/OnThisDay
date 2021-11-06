import React, { Component } from 'react';
import '../styling/Submit.css'
import {storage} from '../util/Authentication';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import firebase from "firebase";

class Submit extends Component {

    constructor() {
        super();
        this.state = {
            date: "",
            subjectName: "",
            location: "",
            sourceList: [{sourceName: "", sourceUrl:""}],
            description: "",
            imageList:[{image: "", caption: ""}],
            files: [],
            studentFirst: "",
            studentLast: "",
            school: "",
            grade: "",
            teacherName: "",
            lat:"",
            lng:"",
            errors: {}
        };
    }
    
    handleValidation() {
        let errors = {};
        let formIsValid = true;

        if (this.state.date === "" || this.state.subjectName === "" || this.state.location === "" || this.state.description === "" ||
        this.state.studentFirst === "" || this.state.studentLast === "" || this.state.school === "" || this.state.grade === "" || 
        this.state.teacherName === "" || this.state.sourceList[0]["sourceName"] === "" || this.state.sourceList[0]["sourceUrl"] === "") {
            formIsValid = false;
            errors["empty"] = "Field cannot be empty";
        }
        if (this.state.subjectName !== "") {
            if (this.state.subjectName.match(/^[a-zA-Z]+$/) === false) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }
        if (this.state.studentFirst !== "") {
            if (this.state.studentFirst.match(/^[a-zA-Z]+$/) === false) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }
        if (this.state.studentLast !== "") {
            if (this.state.studentLast.match(/^[a-zA-Z]+$/) === false) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    processInfo = e => {
        e.preventDefault();
        if (!this.handleValidation()) {
            alert("Please fill out all fields and make sure all fields follow the correct format.");
            return;
        }
        this.onUploadSubmission();
        // need to figure out how to securely store api key, maybe heroku config vars?
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=AIzaSyBQ6AXhN1dWqYH5pjf8zuIoUyfTb1j0bAY`
        axios.get(apiUrl).then(res => {
            this.setState({lat : res.data.results[0].geometry.location.lat});
            this.setState({lng : res.data.results[0].geometry.location.lng});
            this.addUser().then((result, err) => {
                if (err) {
                    alert("Something went wrong :( Try again later!");
                } else {
                    this.props.history.push('/submit-success');
                }
            })
        })
    }
    
    addUser = async(e) => {
        await this.onUploadSubmission();
        const db = firebase.firestore();
    
        // create new submission
        db.collection("unverified").add({
            // date set in local time zone, uploaded to firebase as UTC without adjusting for time difference
            // use getUTCDate() instead of getDate() so the same date appears no matter where the user is
            date: firebase.firestore.Timestamp.fromDate(new Date(this.state.date + "T00:00:00")),
            description: this.state.description,
            imageList: this.state.imageList,
            coordinates: new firebase.firestore.GeoPoint(this.state.lat, this.state.lng),
            location: this.state.location,
            sources: this.state.sourceList,
            studentFirst: this.state.studentFirst,
            studentLast: this.state.studentLast,
            subjectName: this.state.subjectName,
            school: this.state.school,
            grade: parseInt(this.state.grade),
            teacherName: this.state.teacherName,
            submittedDate: firebase.firestore.Timestamp.fromDate(new Date())
        }); 
        
        this.setState({
            date: "",
            subjectName: "",
            location: "",
            sourceList: [{sourceName: "", sourceUrl:""}],
            description: "",
            imageList:[{image: "", caption: ""}],
            files:[],
            studentFirst: "",
            studentLast: "",
            school: "",
            grade: "",
            teacherName: "",
            lat: "",
            lng: "",
            errors: {}
        });
        
        return new Promise(function(resolve, reject) {
            resolve("New submission added!");
        });
    };

    onFileChange = e => {
        const currentFiles = e.target.files;
        this.setState({files: currentFiles})
        let fileListDisplay = document.getElementById('file-list-display');
        fileListDisplay.innerHTML = '';
        this.setState({imageList: []});
        for (let i = 0; i < currentFiles.length; i++) {
            this.setState((prevState) => ({
                imageList: [...prevState.imageList, {image: "", caption:""}]
            }));
        }
        
    };

    onUploadSubmission = () => {
        if (!this.state.files) {
            return;
        }
        const promises = [];
    
        Array.from(this.state.files).forEach((file, i) => {
            const uploadTask = storage.ref().child(`images/${file.name}`).put(file);
            promises.push(uploadTask);
            uploadTask.on("state_changed", snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (snapshot.state === "running") {
                    console.log(`Progress: ${progress}%`);
                }
            },
            error => console.log(error.code),
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then(data => {
                    this.setState(prevState => ({
                        imageList: prevState.imageList.map((obj, j) => 
                            j == i ? Object.assign(obj, {image: data}) : obj
                        )
                        
                    }));
                });                
            });
        });

        return Promise.all(promises)
        .catch(err => console.log(err.code));
    }

    handleInputChange = (e, index, targetList) => {
        const { name, value } = e.target;
        if (targetList === 'sourceList') {
            const list = [...this.state.sourceList];
            list[index][name] = value;
            this.setState({sourceList: list});
        } else if (targetList === 'imageList') {
            const list = [...this.state.imageList];
            list[index][name] = value;
            this.setState({imageList: list});
            console.log(list);
        }
        
    };

    handleRemoveClick = index => {
        const list = [...this.state.sourceList];
        list.splice(index, 1);
        this.setState({sourceList: list});
    };

    handleAddClick = () => {
        this.setState((prevState) => ({
            sourceList: [...prevState.sourceList, {sourceName: "", sourceUrl:""}]
        }));
        
    };

    render() {
        let sourceList = [{sourceName: "", sourceUrl:""}];
        sourceList = this.state.sourceList;
        let files = [];
        files = this.state.files;
        let imageList =[{image: "", caption: ""}];
        imageList = this.state.imageList;

        return (
            <div className='page-content'>
                <h1 id="submitHeading">SUBMIT AN ENTRY</h1>
                <form id="submitForm" onSubmit={this.processInfo.bind(this)}>
                    <div id="aboutYou">
                        <h4>ABOUT YOU</h4>
                        <fieldset>
                            <legend>First Name</legend>
                            <input type="text" name="studentFirst" placeholder="First Name" onChange={this.updateInput} value={this.state.studentFirst} />
                        </fieldset>
                        
                        <fieldset>
                            <legend>Last Name</legend>
                            <input type="text" id="studentLast" name="studentLast" placeholder="Last Name" onChange={this.updateInput} value={this.state.studentLast} />
                        </fieldset>

                        <fieldset>
                            <legend>School</legend>
                            <input type="text" id="school" name="school" placeholder="Name of School" onChange={this.updateInput} value={this.state.school} />
                        </fieldset>
                        <fieldset>
                            <legend>Grade</legend>
                            <input type="number" id="grade" name="grade" placeholder="10" min="1" max="12" onChange={this.updateInput} value={this.state.grade}/>
                        </fieldset>
                        <fieldset>
                            <legend>Teacher</legend>
                            <input type="text" id="teacherName" name="teacherName" placeholder="Name of Teacher" onChange={this.updateInput} value={this.state.teacherName} />
                        </fieldset>
                    
                    </div>
                    <hr></hr>
                    <div id="aboutYourEntry">
                        <h4>ABOUT YOUR ENTRY</h4>
                        <fieldset>
                            <legend>Full name of historical figure</legend>
                            <input type="text" id="subjectName" name="subjectName" placeholder="First Last" onChange={this.updateInput} value={this.state.subjectName} />
                        </fieldset>
                        <fieldset>
                            <legend>Location</legend>
                            <input type="text" id="location" name="location" placeholder="City, Country" onChange={this.updateInput} value={this.state.location} />
                        </fieldset>
                        <fieldset>
                            <legend>Date</legend>
                            <input type="text" id="date" name="date" placeholder="YYYY-MM-DD" onChange={this.updateInput} value={this.state.date} />
                        </fieldset>
                        <fieldset>
                            <legend>Description</legend>
                            <textarea multiline rows={5} id="description" name="description" placeholder="Write or paste your report here" onChange={this.updateInput} value={this.state.description} />
                        </fieldset>
                    </div>

                    <div id="sources">
                        <h5>Sources</h5>
                        {
                            sourceList && sourceList.length > 0 ?
                            sourceList.map((x, i) => {
                                return (
                                    <div>
                                        <div className="sourceField">
                                            {this.state.sourceList.length !== 1 && <button
                                                className="deleteSrc"
                                                onClick={() => this.handleRemoveClick(i)}>✕</button>}

                                            <fieldset class="sourceName">
                                                <legend>Name</legend>
                                                <input type="text" name="sourceName" placeholder="Source Name" 
                                                value={x.sourceName}
                                                onChange={e => this.handleInputChange(e, i, "sourceList")} 
                                                />
                                            </fieldset>
                                            
                                            <fieldset class="sourceUrl">
                                                <legend>URL</legend>
                                                <input type="text" name="sourceUrl" placeholder="Source URL"
                                                value={x.sourceUrl}
                                                onChange={e => this.handleInputChange(e, i, "sourceList")}
                                                />   
                                            </fieldset>
                                        </div>
                                        {this.state.sourceList.length - 1 === i && <input type="button" onClick={this.handleAddClick} value="&#xFF0B; Add source"/>}
                                    </div>
                                );
                            }) : "Loading..."
                        }
                        
                    </div>
                    
                    <div id="photos">
                        <h5>Photos</h5>
                        <div id="file-list-display"></div>
                        {
                            files.length > 0 ?
                            [...files].map((file, i) => {
                                return (
                                    <div>
                                        <img src={URL.createObjectURL(file)} style={{
                                            maxHeight: 200, 
                                            maxWidth: "100%", 
                                            objectFit: 'contain',
                                            display: 'block',
                                            margin: 'auto'
                                        }}/>
                                        <div className="sourceField">
                                            <fieldset class="sourceName">
                                                <legend>Name</legend>
                                                <input type="text" name="image" placeholder="Name" 
                                                value={file.name}
                                                readOnly
                                                />
                                            </fieldset>
                                            
                                            <fieldset class="sourceUrl">
                                                <legend>Caption</legend>
                                                <input type="text" name="caption" placeholder="Image Caption" value={imageList.caption}
                                                onChange={e => this.handleInputChange(e, i, "imageList")}
                                                />   
                                            </fieldset>
                                        </div>
                                    </div>
                                );
                            }) : ""
                        }
                        <label>
                            &#xFF0B; Add photos<input type="file" name="images" id="files" multiple onChange={this.onFileChange} />
                        </label>
                    </div>

                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}

export default withRouter(Submit);
