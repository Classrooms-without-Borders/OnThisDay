import React from 'react';
import '../styling/Details.css'
import Source from '../components/Source'
import { dateToString } from '../util';
import Carousel from 'react-bootstrap/Carousel'
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
 
 
class Details extends React.Component {
  componentDidMount() {
   const { match: { params } } = this.props;
    axios.get(`/details/${params.userId}`)
     .then(({ data: user }) => {
        this.setState({ user });
 
     });
 }

  render() {
   console.log("hello");
   console.log(this.props.location);
   return (
 
   <React.Fragment>
      <Carousel>
       <Carousel.Item>
         <img src={this.props.location.submission.images[0]}  alt="logo"/>
       </Carousel.Item>
       <Carousel.Item>
         <img src={logo}  alt="logo"/> 
       </Carousel.Item>
       <Carousel.Item>
         <img src={logo}  alt="logo"/>
       </Carousel.Item>
     </Carousel>
 
     <div className="card-body">
       <h1 className="title-event">{}</h1>
 
       {this.props.location.submission.subjectName && <h2 className="title-location"> {this.props.location.submission.subjectName}</h2>}
          
       <br></br>
  
       <div className="row=title">
 
       {this.props.location.submission.location && <h3 className="submitter-location">  {this.props.location.submission.location}</h3>}
       {dateToString(this.props.location.submission.eventDate) && <h3 className="submitter-location">  {dateToString(this.props.location.submission.eventDate)} </h3>}
 
       {this.props.location.submission.description && <p> {this.props.location.submission.description}</p>}
 
       </div>
 
       <br></br>
 
     </div>
 
     <Source sourceList={this.props.location.submission.sources}/>
 
     </React.Fragment>
 
     );
 }
}
 
 
export default Details;