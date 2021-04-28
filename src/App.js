import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  firebase
} from './util';

function App() {
  const [teacher, setTeacher] = useState('');

  let db = firebase.firestore();
  let docRef = db.collection("classes").doc("CTodKLrFNrf3b8k4E6X1");

  docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      setTeacher(doc.data()['teacherName']);
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Classroom without borders
        </p>
        <h1>
          A teacher in this project is: {teacher}
        </h1>
      </header>
    </div>
  );

  //submission with name
  //search function
  
}

export default App;
