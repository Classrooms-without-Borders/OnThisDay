import React from 'react';
import { getAllSubmissions } from '../util';
import { CardGrid } from '../components';
import constants from '../styling/Constants';
import StudentSubmission from "../util/StudentSubmission";
import stockPhoto from '../images/3Sandor7.jpg';
import stockPhoto2 from '../images/sofka-skipwith.jpg';


function Gallery() {
    // let allSubmissions = getAllSubmissions();

    // Promise.resolve(allSubmissions).then((submissions) => {
    //     allSubmissions = submissions;
    // });
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
    const allSubmissions = getAllSubmissions();
    //var myStringArray = ["Hello","World"];
    var arrayLength = allSubmissions.length;
    for (var i = 0; i < arrayLength; i++) {
      //  StudentSubmission currentCard = allSubmissions[i]
       // console.log(currentCard.name); 
        console.log(allSubmissions[i]);
        //Do something
    }
    return (
        <div style={{margin: '100px auto 30px', maxWidth: '90vw'}}>
            <h1 style={{
                fontFamily: constants.fontFamily.header,
                fontWeight: 'bold',
                color: constants.color.light,
            }}>GALLERY</h1>
            <CardGrid submissions={[testSub, testSub2, testSub, testSub2]} />
        </div>
    );
}

export default Gallery;