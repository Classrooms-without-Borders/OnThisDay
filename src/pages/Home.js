import React, { useState } from 'react';
import '../styling/Home.css';
import { constants } from '../styling/Constants';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Searchbar from '../components/Searchbar';
import { StyledButton } from '../components/Button';
import BigCard from '../components/BigCard';
import SmallCard from '../components/SmallCard';

function Home() {
    const style = {
        'text-align': 'center'
    }
    const smallDivStyle = {
        'display': 'flex',
        'margin': '12px'
    }

    return (
        <div style={style}>
            <Searchbar />
            <BigCard />
            <div style={smallDivStyle}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </div>
    )
}

//import {
//  firebase
//} from '../util';

//function Home() {
//  const [teacher, setTeacher] = useState('');

//  let db = firebase.firestore();
//  let docRef = db.collection("classes").doc("CTodKLrFNrf3b8k4E6X1");

//  docRef.get().then((doc) => {
//    if (doc.exists) {
//      console.log("Document data:", doc.data());
//      setTeacher(doc.data()['teacherName']);
//    } else {
//      console.log("No such document!");
//    }
//  }).catch((error) => {
//    console.log("Error getting document:", error);
//  });

//  return (
//    <div className="Home">
//      <header className="Home-header">
//        <h2>Welcome to home page</h2>
//        <p>
//          Edit <code>src/Home.js</code> Classroom without borders
//        </p>
//        <h1>
//          A teacher in this project is: {teacher}
//        </h1>
//      </header>
//    </div>
//  );

//  //submission with name
//  //search function
  
//}

export default Home;