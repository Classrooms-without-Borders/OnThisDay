import React from 'react';
import { getAllSubmissions } from '../util';
import { CardGrid } from '../components';
import constants from '../styling/Constants';

function Gallery() {
    let allSubmissions = getAllSubmissions();

    Promise.resolve(allSubmissions).then((submissions) => {
        allSubmissions = submissions;
    });

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