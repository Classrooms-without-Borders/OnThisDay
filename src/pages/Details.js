import React, { useState } from 'react';
import '../styling/Details.css'
import Source from '../components/Source'
//import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel' 
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';





import {
  firebase
} from '../util';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});
  

class Details extends React.Component {
    /*
    constructor () {
  		super();
     }
     */
   //classes = useStyles();


	 
	render() {
		return (

     
    <React.Fragment> 
      <Carousel>
        <Carousel.Item>
          <img src={logo}  alt="logo"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={logo}  alt="logo"/>  
        </Carousel.Item>
        <Carousel.Item>
          <img src={logo}  alt="logo"/>
        </Carousel.Item>
      </Carousel>

        {/*Right now everything is hard coded but should be passed in as props in future */}
      <div className="card-body"> 
        <h1 className="title-event">ffdnfdsifisfdn</h1>
        <h2 className="title-location">{this.props.location}</h2>
        <h2 className="title-date">{this.props.eventDate}</h2>

        <div className="row=title">
          <h3 className="card-submitter">{this.props.studentName}</h3>
          <h3 className="card-grade">{this.props.className}</h3>
        </div>

        <br></br>
        <p> {this.props.description} </p>

      </div>
   
      <Source/>


      </React.Fragment>
     

			);
	}
}


export default Details;


