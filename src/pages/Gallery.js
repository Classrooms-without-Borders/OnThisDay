import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllVerified, searchSubmissions, toDate, getQueryParams } from '../util';
import { CardGrid } from '../components';
import constants from '../styling/Constants';

function Gallery() {
    const [submissions, setSubmissions] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (location.search === '') {
            const fetchData = async () => {
                const data = await getAllVerified();
                setSubmissions(data);
            };
            fetchData();
        } else { // fetch only queried submissions
            const queryParams = getQueryParams(location.search);
            const eventLocation = queryParams[0];
            const dateFrom = queryParams[1] !== '' ? 
                toDate(queryParams[1]) : ''
            const dateTo = queryParams[2] !== '' ?
                toDate(queryParams[2]) : ''

            const querySubmissions = async () => {
                const data = await searchSubmissions(
                    eventLocation, dateFrom, dateTo, 
                    ...queryParams.slice(3)
                );
                setSubmissions(data);
            };
            querySubmissions();
        }
    }, [location]);

    return (
        <div className='page-content' style={{margin: '100px auto 30px', maxWidth: '90vw'}}>
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