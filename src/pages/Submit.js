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
            dateinhist: "",
            nameofindv: "",
            sourceLink: "",
            location: "",
            sourceName: "",
            eventdesc: "",
            images: [],
            studentname: "",
            schoolname: "",
            gradelevel: "",
            teachername: ""
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        const subRef = db.collection("testSub").add({
            dateinhist: this.state.dateinhist,
            nameofindv: this.state.nameofindv,
            sourceLink: this.state.sourceLink,
            location: this.state.location,
            sourceName: this.state.sourceName,
            eventdesc: this.state.eventdesc,
            images: this.state.images,
        }); 
        
        const classRef = db.collection("testClass").add({
            studentname: this.state.studentname,
            schoolname: this.state.schoolname,
            gradelevel: this.state.gradelevel,
            teachername: this.state.teachername
        }); 

        this.setState({
            dateinhist: "",
            nameofindv: "",
            sourceLink: "",
            location: "",
            sourceName: "",
            eventdesc: "",
            images: [],
            studentname: "",
            schoolname: "",
            gradelevel: "",
            teachername: ""
        });
    };

    render() {
        return (
            <Grid container>
                 <Grid item xs={12}>
                    <h1>SUBMIT AN ENTRY</h1>
                    <form onSubmit={this.addUser}>
                        <h4>ABOUT YOU</h4>
                        <TextField class="outlined-basic" name="studentname" placeholder="Name of Student" onChange={this.updateInput} value={this.state.studentname} />
                        <TextField class="outlined-basic" name="schoolname" placeholder="School" onChange={this.updateInput} value={this.state.schoolname} />
                        <TextField class="outlined-basic" name="gradelevel" placeholder="Grade" onChange={this.updateInput} value={this.state.gradelevel}/>
                        <TextField class="outlined-basic" name="teachername" placeholder="Name of Teacher" onChange={this.updateInput} value={this.state.teachername} />
                        
                        <h4>ABOUT YOUR ENTRY</h4>
                        <TextField class="outlined-basic" name="nameofindv" placeholder="Full name of historical figure" onChange={this.updateInput} value={this.state.nameofindv} />
                        <TextField class="outlined-basic" name="location" placeholder="Location" onChange={this.updateInput} value={this.state.location} />
                        <TextField class="outlined-basic" name="dateinhist" placeholder="Date" onChange={this.updateInput} value={this.state.dateinhist} />
                        <TextField class="outlined-multiline-static" multiline rows={5} name="eventdesc" placeholder="Event description" onChange={this.updateInput} value={this.state.eventdesc} />
                        
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
