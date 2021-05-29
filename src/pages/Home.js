import React from 'react';
import '../styling/Home.css';
import {
    Header,
    BigCard,
    CardGrid,
} from '../components';
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

    return (
        <div style={{backgroundColor: constants.color.dark}}>
            <Header active='Home'/>

            <BigCard submission={testSub} />
            <CardGrid submissions={[testSub, testSub, testSub, testSub]} />
        </div>
    );
}

export default Home;