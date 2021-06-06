import React from 'react';
import { BigCard, CardGrid, StyledButton } from '../components';
import constants from '../styling/Constants';
import { Link } from 'react-router-dom';
// FOR TESTING ONLY
import stockPhoto from '../images/home-stock-image.png';
import stockPhoto2 from '../images/sofka-skipwith.jpg';
import StudentSubmission from "../util/StudentSubmission";
import { getAllSubmissions } from '../util';

//change

async function Home() {
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
    let submissions = [];
    submissions = getAllSubmissions();

    if (submissions === undefined) {
        return "not working";
    }
    let threeSubmissions = []; 
    for (let i = 1; i < submissions.length; ++i) {
        threeSubmissions[i - 1] = submissions[i];
    }
    
    const studentSubmission = submissions[0];
    //let mySubjectName = submissions[0].subjectName;
    //let myLocation = studentSubmission.location;
    //let myEventDate = studentSubmission.eventDate;
    //let myStudentName = studentSubmission.studentName;
    //let myClassName = studentSubmission.className;
    

    //const studentSubmission = submissions[0];
    //let id = studentSubmission.subjectName;

    return (
        <React.Fragment>
            <div style={{backgroundColor: constants.color.dark}}>
                <div style={{margin: '100px auto 40px', width: '1400px', maxWidth: '90vw'}}>
                    <BigCard submission = {submissions[0]} />
                    <CardGrid submissions={threeSubmissions} /> {/*slice(1) passes in three */}
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