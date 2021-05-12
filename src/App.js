import React from 'react';
import './App.css';
import { constants } from './styling/Constants';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Details from './pages/Details';
import Submit from './pages/Submit';

// routers
import {
    BrowserRouter as Router,
    Switch,
    Route,
   // Redirect
} from "react-router-dom";

function App() {
  return (
          <div className={"App"} style={{"background-color": constants.color.dark}}>
              <Router>
                  <Header />
                  <Switch>
                      <Route exact path="/" component={Home} /> 
                      <Route exact path="/home" component={Home} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/gallery" component={Gallery} />
                      <Route exact path="/details" component={Details} />
                      <Route exact path="/submit" component={Submit} />
                  </Switch>
                  <Footer />
              </Router>
          </div>
  );
}

export default App;





/*
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Footer } from './components';
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
*/