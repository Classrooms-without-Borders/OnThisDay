
/*
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

        {}
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


*/

import React, { useState } from 'react';
import '../styling/Details.css'
import Source from '../components/Source'
//import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel' 
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';






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

   componentDidMount() {
    const { match: { params } } = this.props;
  
    axios.get(`/details/${params.userId}`)
      .then(({ data: user }) => {
        console.log('user', user);
  
        this.setState({ user });
      });
  }


	 
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
        <h1 className="title-event">Ferenc Coper</h1>
        <br></br>
        <h2 className="title-location">Kiev, Ukraine</h2>
        <br></br>

        <h2 className="title-date">January 1, 1963 at 12:00:00 AM UTC-5</h2>

        <div className="row=title">
          <h3 className="card-submitter">By Karina Zhang</h3>
          <h3 className="submitter-location"> Midland High School</h3>
        </div>

        <br></br>
        <p>This is me in forced labor. During the war, first I was sent to Gyongyos for forced labor service, then to Vac, and following that I spent one and a half years in Sastov, Ukraine, near Kiev. It was in August, 1942 when we went there. When full Jews were ordered to be sent further away, I, as a war-orphan, was offered the chance to stay in Vac. People who had Christian spouses were allowed to stay. They were given white armbands. I was contemplating whether I should go or stay, and in the end I decided to leave. But right then a guard kicked me back to the line. He wouldn't let me leave. Thank God. Because less than fifty percent of the company I was supposed to join ever returned. Later on, it was our turn to be sent to Ukraine. My company was a wonderful unit, an extraordinary group of people. Lots of medical doctors and lawyers among them. At the beginning of 1944 we were disarmed. Then on May 20, 1944 I was taken to Pecs, and from there to Szombathely. There I pulled the gold ring off my finger because I knew it would be taken from me anyway. I gave it away to someone in the street, so at least I gave it to someone I wanted to. We worked at an airport in Szombathely.</p>


      </div>
   
      <Source/>


      </React.Fragment>
     

			);
	}
}


export default Details;