import React from 'react';
import { BigCard, CardGrid, StyledButton } from '../components';
import constants from '../styling/Constants';
import { Link } from 'react-router-dom';
// FOR TESTING ONLY
import stockPhoto from '../images/3Sandor7.jpg';
import stockPhoto2 from '../images/sofka-skipwith.jpg';
import StudentSubmission from "../util/StudentSubmission";
import { getAllSubmissions } from '../util';
import firebase from "firebase";


const db = firebase.firestore();

function Home() {
    // FOR TESTING ONLY
    const testSub = {
        location: 'London, England',
        eventDate: new Date('03/4/1944'),
        subjectName: 'John Doe',
        images: [stockPhoto],
        submitterName: 'Amy Smith',
    };
    const testSub2 = {
        location: 'St. Petersburg, Russia',
        eventDate: new Date('09/09/1939'),
        subjectName: 'Sofka Skipwith',
        images: [stockPhoto2],
        submitterName: 'Brad Johnson',
    };

    // call getRecentSubmissions here
    //array of studentsubmission object
    let submissions =  getAllSubmissions();
    //Promise.resolve(submissions).then(() => {

        console.log("type of " + typeof submissions);
        console.log("first element printed out " + submissions[0]);
        console.log("length is sooo" + submissions.length);
        //let newObject = submissions.pop();
    // console.log("This is when poppin + " + newObject);
    // newObject.pop();
        console.log()

   // });

    if (submissions === undefined) {
        return "not working";
    }

    console.log("this is length -> " + submissions.length);
    console.log("This is type of return from getAllSubmissions ->" + typeof submissions);
    let threeSubmissions = []; 
    for (let i = 1; i < submissions.length; ++i) {
        threeSubmissions[i - 1] = submissions[i];
    }

    for (let i = 0; i < submissions.length; ++i) {
        let mySubjectName = submissions[i].subjectName;
        console.log("This is in loop " + mySubjectName)
        let myLocation = submissions[i].location;
        console.log("This is in loop " + myLocation)
        let myEventDate = submissions[i].eventDate;
        console.log("This is in loop " + myEventDate)
        let myStudentName = submissions[i].studentName;
        console.log("This is in loop " + myStudentName)
        let myClassName = submissions[i].className;
        console.log("This is in loop " + myClassName)
    }

    
    const firstSubmission = submissions[1];
    console.log("This is type of first card" + typeof firstSubmission);

    //let mySubjectName = submissions[0].subjectName;
    //let myLocation = studentSubmission.location;
    //let myEventDate = studentSubmission.eventDate;
    //let myStudentName = studentSubmission.studentName;
    //let myClassName = studentSubmission.className;


    let i = 0;
    let myId;
    let mydescription;
    let mylocation;
    let myimages;
    let mysources;
    let mystudentFirst;
    let mystudentLast;
    let mysubjectName;
    let mysubmittedDate;
    let myEventDate;
    
   db.collection('submissions').get().then((submissions) => {
    submissions.forEach((doc) => {
      

      myId = doc.id;
      console.log("doc id: " + myId);
      mydescription = doc.data().description;
      mylocation = doc.data().location;
      myimages = doc.data().images;
      mysources = doc.data().sources;
      mystudentFirst = doc.data().studentFirst;
      mystudentLast = doc.data().studentLast;
      mysubjectName = doc.data().subjectName;
      mysubmittedDate = doc.data().submittedDate;
      myEventDate = doc.data().date;

      //submissionObjects[i] = new StudentSubmission(doc.id, doc.data().subjectName, doc.data().location, doc.data().date, doc.data().description, doc.data().images, doc.data().sources);


      //submissionObjects[i] = new StudentSubmission("title", doc.data().date, doc.data().description, doc.data().images, doc.data().sources, doc.data().studentName, doc.data().submittedDate, "");
      //submissionObjects[i] = new StudentSubmission(doc.data().subjectName, doc.data().location, doc.data().description, doc.data().images, doc.data().sources, doc.data().studentName, doc.data().submittedDate, "");

      i+=1;

  })});
    

    const recentSubmission = new StudentSubmission(myId, mydescription, mylocation, myimages, mysources, mystudentFirst, mystudentLast, mysubjectName, mysubmittedDate);
    //let id = studentSubmission.subjectName;

    console.log("this is the most recent submission " + recentSubmission);


    return (
        <React.Fragment>
            <div style={{backgroundColor: constants.color.dark}}>
                <div style={{margin: '100px auto 40px', width: '1400px', maxWidth: '90vw'}}>
                    <BigCard submission = {testSub} />
                    <CardGrid submissions={[testSub, testSub2, testSub]} /> {/*slice(1) passes in three */}
                    <div id='project-desc' style={{
                        backgroundColor: constants.color.light,
                        color: constants.color.dark,
                    }}>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', backgroundColor: constants.color.lightGray}}>
                <div style={{margin: '60px 0', width: '1400px'}}>
                    <div style={{margin: 'auto', textAlign: 'left', width: '800px', maxWidth: '45vw'}}>
                        <h1 style={{
                            fontFamily: constants.fontFamily.header,
                            fontWeight: 'bold',
                        }}>ON THIS DAY</h1>
                        <p>
                            On This Day, a project of Classrooms Without Borders, is a collection of 
                            student research to uncover and share the personal histories of the individuals 
                            during World War II and the Holocaust. 
                            Only by understanding what was, can we really understand what was lost.
                        </p>
                        <div style={{margin: '24px 0 12px'}}>
                            <Link to='/gallery' style={{textDecoration: 'none'}}>
                                <StyledButton callToAction width='204px'>Explore the Gallery</StyledButton>
                            </Link>
                        </div>
                        <Link to='/submit' style={{textDecoration: 'none'}}>
                            <StyledButton callToAction width='204px'>Submit an Entry</StyledButton>
                        </Link>
                    </div>
                </div>
                <div className='img-panel' style={{
                    overflow: 'hidden',
                    height: '400px',
                    width: '900px',
                    maxWidth: '50vw',
                }}>
                    <img src={stockPhoto} alt='Todo: insert image description' style={{
                        objectFit: 'cover',
                        width: '100%',
                    }} />
                </div>
            </div>
        </React.Fragment>
    );
      
}

export default Home;