import React, { useState, useEffect } from 'react';
import { getAllVerified } from '../util';
import { CardGrid } from '../components';
import constants from '../styling/Constants';

function Gallery() {
    const [submissions, setSubmissions] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllVerified();
            setSubmissions(data);
        };
        fetchData();
    }, []);

    return (
        <div style={{margin: '100px auto 30px', maxWidth: '90vw'}}>
            <h1 style={{
                fontFamily: constants.fontFamily.header,
                fontWeight: 'bold',
                color: constants.color.light,
            }}>GALLERY</h1>
            {submissions && <CardGrid submissions={submissions} />}
        </div>
    );
}

export default Gallery;