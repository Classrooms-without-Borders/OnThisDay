import React from 'react';
import '../styling/Details.css'
import Source from '../components/Source'
//import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel' 
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Details extends React.Component {
   componentDidMount() {
    const { match: { params } } = this.props;
  
    axios.get(`/details/${params.userId}`)
      .then(({ data: user }) => {
        console.log('user', user);
  
        this.setState({ user });

      });
  }
  //console.log({this.props.location.state})
  //let currentSubmission;
  //var currentSubmission = props.location.state.mySubmission;
  //let var = this.props.location.state;
  
	render() {
    console.log("hello");
    console.log(this.props.location);
		return (

    <React.Fragment> 
      <Carousel>
        <Carousel.Item>
          <img src={this.props.location.submission.images[0]} />
        </Carousel.Item>
      </Carousel>

        {/*Right now everything is hard coded but should be passed in as props in future */}
      <div className="card-body">
        <h1 className="title-event">{}</h1>

        {this.props.location.submission.subjectName && <h2 className="title-location"> {this.props.location.submission.subjectName}</h2>}

        <br></br>
    


        {/* {this.props.location.submission.submitDate && <h2 className="title-date"> By {this.props.location.submission.studentName}</h2>}  */}
{/*  */}
        <div className="row=title">


        {this.props.location.submission.location && <h3 className="submitter-location">  {this.props.location.submission.location}</h3>}
        {JSON.stringify(this.props.location.submission.eventDate) && <h3 className="submitter-location">  {JSON.stringify(this.props.location.submission.eventDate)} </h3>}


        {this.props.location.submission.description && <p> {this.props.location.submission.description}</p>}

        </div>

        <br></br>


      </div>
   
      <Source/>


      </React.Fragment>
     

			);
	}
}

const addRouter = withRouter(Details);

export default Details;