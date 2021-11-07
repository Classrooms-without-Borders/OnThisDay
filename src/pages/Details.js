import React, { useState, useEffect } from 'react';
import '../styling/Details.css'
import Source from '../components/Source';
import ImageCarousel from '../components/ImageCarousel';
import { dateToString } from '../util';

 
class Details extends React.Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`/details/${params.userId}`)
      .then(({ data: user }) => {
        this.setState({ user });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.location.submission.imageList && <ImageCarousel imageList={this.props.location.submission.imageList}/>}
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

/* TODO: do the filtering of a submission in the backend instead of right here - will cause a big performance hit */

   return (
 
   <React.Fragment>

    {mySubmission?.images && <ImageCarousel imageList={mySubmission.images}/>}


     <div className="card-body">
       <h1 className="title-event">{}</h1>
 
       {mySubmission?.subjectName && <h2 className="title-location"> {mySubmission.subjectName}</h2>}
          
       <br></br>
      
       <div className="row=title">

 
       {mySubmission?.location && <h3 className="submitter-location">  {mySubmission.location}</h3>}
 
       {mySubmission?.description && <p> {mySubmission.description}</p>}
 
      
       </div>
 
       <br></br>
 
     </div>
 
     {mySubmission?.sources && <Source sourceList={mySubmission.sources}/>}
 
     </React.Fragment>
 
     );
 }

export default Details;