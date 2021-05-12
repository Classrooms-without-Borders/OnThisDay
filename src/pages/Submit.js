import React, { Component } from 'react';
//import { Place, GoogleMap, Parameters, OptionMenu, SimulationTimeseries, PersistentDrawerLeft } from '../components';
import '../styling/Submit.css'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
//import Fab from '@material-ui/core/Fab';
//import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {firebase} from '../util';
import ImageUpload from '../components/ImageUpload'

const ColoredAccordion = withStyles({
    root: {
        backgroundColor: '#1b4441c2',
        fontSize: '20px',
        color: '#66FCF1'



    },
})(Accordion);



class Submit extends Component {
    // classes = useStyles();

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
            studentName: "",
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
        const classRef = db.collection("testClass").add({
            school: this.state.school,
            grade: this.state.grade,
            teacherName: this.state.teacherName
        }); 
    
        // create new submission
        let sources = {};
        sources[this.state.sourceName] = this.state.sourceLink;
        const subRef = db.collection("testSub").add({
            date: firebase.firestore.Timestamp.fromDate(new Date(this.state.date)),
            description: this.state.description,
            images: this.state.images,
            location: new firebase.firestore.GeoPoint(this.state.lat, this.state.lng),
            sources: sources,
            studentName: this.state.studentName,
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
            studentName: "",
            school: "",
            grade: "",
            teacherName: "",
            lat: "",
            lng: ""
        });
    };

    render() {
        return (
            <Grid container>
                 <Grid item xs={12}>
                    <h1>SUBMIT AN ENTRY</h1>
                    <form onSubmit={this.processInfo}>
                        <h4>ABOUT YOU</h4>
                        <TextField class="outlined-basic" name="studentName" placeholder="Name of Student" onChange={this.updateInput} value={this.state.studentName} />
                        <TextField class="outlined-basic" name="school" placeholder="School" onChange={this.updateInput} value={this.state.school} />
                        <TextField class="outlined-basic" name="grade" placeholder="Grade" onChange={this.updateInput} value={this.state.grade}/>
                        <TextField class="outlined-basic" name="teacherName" placeholder="Name of Teacher" onChange={this.updateInput} value={this.state.teacherName} />
                        
                        <h4>ABOUT YOUR ENTRY</h4>
                        <TextField class="outlined-basic" name="subjectName" placeholder="Full name of historical figure" onChange={this.updateInput} value={this.state.subjectName} />
                        <TextField class="outlined-basic" name="location" placeholder="Location" onChange={this.updateInput} value={this.state.location} />
                        <TextField class="outlined-basic" name="date" placeholder="Date" onChange={this.updateInput} value={this.state.date} />
                        <TextField class="outlined-multiline-static" multiline rows={5} name="description" placeholder="Event description" onChange={this.updateInput} value={this.state.description} />
                        
                        <h4>Sources</h4>
                        <TextField class="outlined-basic" name="sourceLink" placeholder="Source URL" onChange={this.updateInput} value={this.state.sourceLink} />
                        <TextField class="outlined-basic" name="sourceName" placeholder="Source name" onChange={this.updateInput} value={this.state.sourceName} />
                        
                        <h4>Photos</h4>
                        {/* <input type="file" name="images" multiple onChange={this.updateInput} value={this.state.images} /> */}
                        <ImageUpload />
                        <br /><br />
                        <Button variant="contained" type="submit">Submit</Button>

                    </form>
                 </Grid>
             </Grid>
        );
    }
}
export default Submit;
