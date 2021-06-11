import React from 'react';
import '../styling/Details.css'
import Source from '../components/Source'
//import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel' 
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import axios from 'axios';

class Details extends React.Component {
   componentDidMount() {
    const { match: { params } } = this.props;
  
    axios.get(`/details/${params.userId}`)
      .then(({ data: user }) => {
        console.log('user', user);
  
        this.setState({ user });
      });
  }
  //let currentSubmission;
  //var currentSubmission = props.location.state.mySubmission;
  //let var = this.props.location.state;

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
        <h1 className="title-event">{}</h1>
        <br></br>
        <h2 className="title-location">Kiev, Ukraine</h2>
        <br></br>
        <h2 className="title-date">January 1, 1963</h2>

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