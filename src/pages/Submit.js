import React, { Component } from 'react';
import '../styling/Submit.css'
import {firebase} from '../util';
import {storage} from '../util';
import axios from 'axios';

const styles = theme => ({
   
});

class Submit extends Component {

    constructor() {
        super();
        this.state = {
            date: "",
            subjectName: "",
            location: "",
            sourceList: [{sourceName: "", sourceUrl:""}],
            description: "",
            images: [],
            studentFirst: "",
            studentLast: "",
            school: "",
            grade: "",
            teacherName: "",
            lat:"",
            lng:""
        };
    }
    
    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    processInfo = e => {
        e.preventDefault();
        this.onUploadSubmission();
        // need to figure out how to securely store api key, maybe heroku config vars?
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=AIzaSyBQ6AXhN1dWqYH5pjf8zuIoUyfTb1j0bAY`
        axios.get(apiUrl).then(res => {
            this.setState({lat : res.data.results[0].geometry.location.lat});
            this.setState({lng : res.data.results[0].geometry.location.lng});
            console.log("lat" + this.state.lat);
            console.log("lng" + this.state.lng);
            this.addUser();
        })

    }
    addUser = async(e) => {
        await this.onUploadSubmission();
        console.log("current images are: ", this.state.images);
        const db = firebase.firestore();

        // create new class
        const classRef = db.collection("classes").add({
            school: this.state.school,
            grade: this.state.grade,
            teacherName: this.state.teacherName
        }); 
    
        // create new submission
        const subRef = db.collection("submissions").add({
            date: firebase.firestore.Timestamp.fromDate(new Date(this.state.date)),
            description: this.state.description,
            images: this.state.images,
            location: new firebase.firestore.GeoPoint(this.state.lat, this.state.lng),
            sources: this.state.sourceList,
            studentFirst: this.state.studentFirst,
            studentLast: this.state.studentLast,
            subjectName: this.state.subjectName,
            submittedDate: firebase.firestore.Timestamp.fromDate(new Date())
        }); 
        
        this.setState({
            date: "",
            subjectName: "",
            location: "",
            sourceList: [{sourceName: "", sourceUrl:""}],
            description: "",
            images: [],
            files:[],
            studentFirst: "",
            studentLast: "",
            school: "",
            grade: "",
            teacherName: "",
            lat: "",
            lng: ""
        });
        let fileListDisplay = document.getElementById('file-list-display');
        let fileInput = document.getElementById('files');
        fileListDisplay.innerHTML = '';
        fileInput.value = "";
    };

    onFileChange = e => {
        this.setState({files: e.target.files})
        let fileListDisplay = document.getElementById('file-list-display');
        fileListDisplay.innerHTML = '';
        for (let i = 0; i < e.target.files.length; i++) { 
            fileListDisplay.innerHTML += `<p>${e.target.files[i].name}</p>`;
        }
    };

    onUploadSubmission = () => {
        this.setState({images: []});
        if (!this.state.files) {
            return;
        }
        const promises = [];
    
        Array.from(this.state.files).forEach(file => {
            const uploadTask = storage.ref().child(`images/${file.name}`).put(file);
            promises.push(uploadTask);
            uploadTask.on("state_changed", snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (snapshot.state === "running") {
                    console.log(`Progress: ${progress}%`);
                }
            },
            error => console.log(error.code),
            async () => {
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                this.setState({images: [...this.state.images, downloadURL]});
            });
        });

        return Promise.all(promises)
        .then(() => console.log("All images successfully uploaded!"))
        .catch(err => console.log(err.code));
    }

    handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...this.state.sourceList];
        list[index][name] = value;
        this.setState({sourceList: list});
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
                
        return (
            <div>
                <h1 id="submitHeading">SUBMIT AN ENTRY</h1>
                <form id="submitForm" onSubmit={this.processInfo}>
                    <div id="aboutYou">
                        <h4>ABOUT YOU</h4>
                        <input type="text" name="studentFirst" placeholder="First Name" onChange={this.updateInput} value={this.state.studentFirst} />
                        <input type="text" name="studentLast" placeholder="Last Name" onChange={this.updateInput} value={this.state.studentLast} />

                        <input type="text" name="school" placeholder="School" onChange={this.updateInput} value={this.state.school} />
                        <input type="text" name="grade" placeholder="Grade" onChange={this.updateInput} value={this.state.grade}/>
                        <input type="text" name="teacherName" placeholder="Name of Teacher" onChange={this.updateInput} value={this.state.teacherName} />
                    </div>
                    <hr></hr>
                    <div id="aboutYourEntry">
                        <h4>ABOUT YOUR ENTRY</h4>
                        <input type="text" name="subjectName" placeholder="Full name of historical figure" onChange={this.updateInput} value={this.state.subjectName} />
                        <input type="text" name="location" placeholder="Location" onChange={this.updateInput} value={this.state.location} />
                        <input type="text" name="date" placeholder="Date" onChange={this.updateInput} value={this.state.date} />
                        <textarea multiline rows={5} name="description" placeholder="Description" onChange={this.updateInput} value={this.state.description} />
                    </div>

                    <div id="sources">
                        <h5>Sources</h5>
                        {
                            sourceList && sourceList.length > 0 ?
                            sourceList.map((x, i) => {
                                return (
                                    <div className="box">
                                        {this.state.sourceList.length !== 1 && <button
                                            className="deleteSrc"
                                            onClick={() => this.handleRemoveClick(i)}>✕</button>}

                                        <input type="text" class="srcName" name="sourceName" placeholder="Source Name" 
                                        onChange={e => this.handleInputChange(e, i)} 
                                        value={x.sourceName} 
                                        />
                                        
                                        <input type="text" class="url" name="sourceUrl" placeholder="Source URL"
                                        value={x.sourceUrl}
                                        onChange={e => this.handleInputChange(e, i)}
                                        />   

                                        <br />
                                        {this.state.sourceList.length - 1 === i && <input type="button" onClick={this.handleAddClick} value="&#xFF0B; Add source"/>}
                                    </div>
                                );
                            }) : "Loading..."
                        }
                        
                    </div>

                    <h5>Photos</h5>
                    <div id="file-list-display"></div>
                    <label>
                    &#xFF0B; Add photos<input type="file" name="images" id="files" multiple onChange={this.onFileChange} />
                    </label>
                    

                    <br /><br />
                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}

export default Submit;
