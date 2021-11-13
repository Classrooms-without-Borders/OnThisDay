
import React, { useState, useEffect } from 'react';
import '../styling/Details.css'
import Source from '../components/Source';
import ImageCarousel from '../components/ImageCarousel';
import { dateToString } from '../util';
import Carousel from 'react-bootstrap/Carousel'
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Gallery from './Gallery';
import { getAllVerified } from '../util';
import { useLocation } from 'react-router-dom';
 


function Details () {
  const [submissions, setSubmissions] = useState(null);

  
 useEffect(() => {
  const fetchData = async () => {
      const data = await getAllVerified(); //just get the one
      setSubmissions(data);
  };
  fetchData();
}, []);


  let str =  JSON.stringify(window.location.pathname);
  let submissionId = str.split("/").pop();


  submissionId = submissionId.replace('"', '');

  let mySubmission;
  if (submissions != null) {
    var arrayLength = submissions.length;
    for (var i = 0; i < arrayLength; i++) {
        let string_id = submissions[i].id;
        string_id = string_id.replace('"', '');
        if (submissionId === string_id) {

          mySubmission = JSON.parse(JSON.stringify(submissions[i]));
        }
       
    }
}


   return (
 
   <React.Fragment>

    {mySubmission?.imageList && <ImageCarousel imageList={mySubmission.imageList}/>}


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