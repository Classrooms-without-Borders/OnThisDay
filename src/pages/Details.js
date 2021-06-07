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
          <h1>Hello world</h1>
          <h1>Hello world</h1>

          <h1>Hello world</h1>

          <h1>Hello world</h1>
          <h1>Hello world</h1>

          <h1>Hello world</h1>

          <h1>Hello world</h1>
          <h1>Hello world</h1>

          <h1>Hello world</h1>



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
        <h1>{this.props.subjectName}</h1>
        <h1 className="title-event">{this.props.subjectName}</h1>
        <h2 className="title-location">{this.props.subjectName}</h2>
        <h2 className="title-date">{this.props.subjectName}</h2>

        <div className="row=title">
          <h3 className="card-submitter">dfdfd</h3>
          <h3 className="card-grade">dfdfd</h3>
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


