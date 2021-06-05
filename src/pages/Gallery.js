import React from 'react';
import { getAllSubmissions } from '../util';
import { CardGrid } from '../components';
import constants from '../styling/Constants';
import StudentSubmission from "../util/StudentSubmission";


function Gallery() {
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
            <CardGrid submissions={allSubmissions} />
        </div>
    );
}

export default Gallery;