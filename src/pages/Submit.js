import React, { Component } from 'react';
import '../styling/Submit.css'
import { firebase } from '../util';
import { StyledButton, ImageUpload } from '../components';
import axios from 'axios';

class Submit extends Component {
    constructor() {
        super();
        this.state = {
            date: "",
            subjectName: "",
            sourceLink: "",
            location: "",
            sourceName: "",
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
        // API call
        // need to figure out how to securely store api key, maybe heroku config vars?
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=AIzaSyBQ6AXhN1dWqYH5pjf8zuIoUyfTb1j0bAY`
        axios.get(apiUrl).then(res => {
            // console.log(res);
            this.setState({lat : res.data.results[0].geometry.location.lat});
            this.setState({lng : res.data.results[0].geometry.location.lng});
            console.log("lat" + this.state.lat);
            console.log("lng" + this.state.lng);
            this.addUser();
        })

    }
    addUser = e => {
        const db = firebase.firestore();

        // create new class
        const classRef = db.collection("classes").add({
            school: this.state.school,
            grade: this.state.grade,
            teacherName: this.state.teacherName
        }); 
    
        // create new submission
        let sources = {};
        sources[this.state.sourceName] = this.state.sourceLink;
        const subRef = db.collection("submissions").add({
            date: firebase.firestore.Timestamp.fromDate(new Date(this.state.date)),
            description: this.state.description,
            images: this.state.images,
            location: new firebase.firestore.GeoPoint(this.state.lat, this.state.lng),
            sources: sources,
            studentFirst: this.state.studentFirst,
            studentLast: this.state.studentLast,
            subjectName: this.state.subjectName,
            submittedDate: firebase.firestore.Timestamp.fromDate(new Date())
        }); 
        
        this.setState({
            date: "",
            subjectName: "",
            sourceLink: "",
            location: "",
            sourceName: "",
            description: "",
            images: [],
            studentFirst: "",
            studentLast: "",
            school: "",
            grade: "",
            teacherName: "",
            lat: "",
            lng: ""
        });
    };

    render() {
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
                        <h4>Sources</h4>
                        <input type="text" className="url" name="sourceLink" placeholder="Source URL" onChange={this.updateInput} value={this.state.sourceLink} />
                        <input type="text" className="srcName" name="sourceName" placeholder="Source name" onChange={this.updateInput} value={this.state.sourceName} />
                    </div>

                    <h4>Photos</h4>
                    {/* <input type="file" name="images" multiple onChange={this.updateInput} value={this.state.images} /> */}
                    <ImageUpload />
                    <br /><br />
                    <StyledButton type="submit">Submit</StyledButton>

                </form>
            </div>
        );
    }
}

export default Submit;
