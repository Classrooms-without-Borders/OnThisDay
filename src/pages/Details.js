import React, { useState } from 'react';
import '../styling/Details.css'
import Source from '../components/Source'
//import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel' 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';




import {
  firebase
} from '../util';
  

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
      <img src={logo}  alt="logo"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=282c34"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


   
      <Source/>
      </React.Fragment>
     
			);
	}
}


export default Details;


