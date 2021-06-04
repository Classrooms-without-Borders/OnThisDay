import React from 'react';
import { BigCard, CardGrid } from '../components';
import constants from '../styling/Constants';
// FOR TESTING ONLY
import stockPhoto from '../images/home-stock-image.png';

function Home() {
    // FOR TESTING ONLY
    const testSub = {
        location: 'London, England',
        eventDate: new Date('03/4/1944'),
        subjectName: 'Sofka Skipwith',
        images: [stockPhoto]    
    };

    // call getRecentSubmissions here
    const submissions = [testSub, testSub, testSub, testSub];

    return (
        <div style={{backgroundColor: constants.color.dark}}>
            <BigCard submission={submissions[0]} />
            <CardGrid submissions={submissions.slice(1)} />
        </div>
    );
}

export default Home;