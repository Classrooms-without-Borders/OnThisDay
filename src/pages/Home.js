import React, { useState, useEffect } from 'react';
import { BigCard, CardGrid, StyledButton } from '../components';
import constants from '../styling/Constants';
import { Link } from 'react-router-dom';
import onThisDayPhoto from '../images/CWBLarge.png';
import { getAllVerified } from '../util';

function Home() {
    const [submissions, setSubmissions] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllVerified();
            setSubmissions(data);
        };
        fetchData();
    }, []);

    if (submissions) {

    console.log(JSON.stringify("this is all the submissions" + submissions[0].subjectName));
    console.log(JSON.stringify("this is all the submissions" + JSON.stringify(submissions[0].imageList)));
    console.log(JSON.stringify("this is all the submissions" + JSON.stringify(submissions[3].imageList[0])));

    console.log("this is a caption " + submissions[3].imageList[0].caption); //getting a caption
    console.log("this is a image url " + submissions[3].imageList[0].image);



    }
    return (
        <div className='page-content'>
            <div style={{backgroundColor: constants.color.dark}}>
                <div style={{margin: '40px auto', width: '1400px', maxWidth: '90vw'}}>
                    {submissions && <BigCard submission={submissions[0]} />}
                    {submissions && <CardGrid submissions={submissions.slice(1, 4)} />}
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
                    height: '400px',
                    padding: '60px 10vw 60px 0',
                }}>
                    <img src={onThisDayPhoto} alt='On this day: Classrooms Without Borders' style={{
                        height: '100%',
                        width: 'auto',
                    }} />
                </div>
            </div>
        </div>
    );
      
}

export default Home;