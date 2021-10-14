import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllVerified, searchSubmissions } from '../util';
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
            const queryParams = location.search.split('&').map(param => {
                const tmp = param.split('=');
                return tmp[tmp.length - 1];
            });
            const eventLocation = queryParams[0];
            const dateFrom = new Date(queryParams[1]);
            const dateTo = new Date(queryParams[2]);
            // const subjectName = queryParams[3];
            // const submitterName = queryParams[4];
            // const grade = queryParams[5];
            // const teacher = queryParams[6];
            // TODO Anna: implement advanced search

            const querySubmissions = async () => {
                const data = await searchSubmissions(
                    eventLocation, dateFrom, dateTo
                );
                setSubmissions(data);
            };
            querySubmissions();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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