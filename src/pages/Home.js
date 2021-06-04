import React from 'react';
import { BigCard, CardGrid, StyledButton } from '../components';
import constants from '../styling/Constants';
import { Link } from 'react-router-dom';
// FOR TESTING ONLY
import stockPhoto from '../images/home-stock-image.png';
import stockPhoto2 from '../images/sofka-skipwith.jpg';

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
    const submissions = [testSub, testSub2, testSub, testSub2];

    return (
        <React.Fragment>
            <div style={{backgroundColor: constants.color.dark}}>
                <div style={{margin: '100px auto 40px', width: '1400px', maxWidth: '90vw'}}>
                    <BigCard submission={submissions[0]} />
                    <CardGrid submissions={submissions.slice(1)} />
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