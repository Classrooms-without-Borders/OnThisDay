import './App.css';
import React, {useState} from "react";
import {Component} from "react";
import firebase from 'firebase/app';
import 'firebase/firestore'
import { render } from 'react-dom';

import "firebase/auth";
import "firebase/storage";
//util fb
var firebaseConfig = {
  apiKey: "AIzaSyA_5m6HNuK1y5qRliboE-jPAveyRIriAgM",
  authDomain: "sample2-a34c5.firebaseapp.com",
  projectId: "sample2-a34c5",
  storageBucket: "sample2-a34c5.appspot.com",
  messagingSenderId: "1041754811999",
  appId: "1:1041754811999:web:bf114c0153ce740bc475ea",
  measurementId: "G-DZ1M3Y09ZS"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

let db=firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth().app;
let scountry = '';
let scity = '';
async function getQ(){
  const isCountry=db.collection("unverified").where("countryName", "==",  scountry).get();
  const isCity=db.collection("unverified").where("cityName", "==",  scity).get();
  //const isSource=db.collection("unverified").where()
  const [countrySnapshot, citySnapshot]=await Promise.all([
    isCountry,
    isCity
  ]);
  const countryArray = countrySnapshot.docs;
  const cityArray=citySnapshot.docs;
  const qArray=countryArray.concat(cityArray);
  return qArray;
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      docs: [],
      checks: [],
      countryname: '',
      cityname: '',
      sourcename1: '',
      renderList: null,
    };
  }
  myCountrychangeHandler = (event) => {
    this.setState({countryname: event.target.value});
  }
  myCitychangeHandler = (event1) => {
    this.setState({cityname: event1.target.value});
  }

    //clear page before rendering
    componentDidMount(){
      this.setState({
        renderList: false
      })
    }
  
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log(this.state.countryname);
    scountry=this.state.countryname;
    scity=this.state.cityname;
    this.setState({renderList: true})
    this.state.docs.length=0;
    getQ().then((snapshot) => (
      snapshot.forEach((doc) => (
        console.log(doc.data().description),
        this.setState((prevState) => ({
          docs: [...prevState.docs, {
            docID: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            date: doc.data().title,
            country: doc.data().countryName,
            city: doc.data().cityName,
            sourcename: doc.data().sources,
            link: doc.data().url
          }],
        }
        
        ))
      ))
    ))
  }
  //show all entries
  handleAllQuery = formSubmitEventAll => {
    formSubmitEventAll.preventDefault();
    this.state.docs.length=0;
    db.collection("unverified").get().then((snapshot) => (
      snapshot.forEach((doc) => (
         this.setState((prevState) => ({
          docs: [...prevState.docs, {
            docID: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            date: doc.data().title,
            country: doc.data().countryName,
            city: doc.data().cityName,
            sourcename: doc.data().sources,
            link: doc.data().url
          }],
        }

        ))
      ))
    ))
  }

  //state for checkboxes
  //makes sure individual checkboxes can be checked and stuff
  handleCheckboxChange = changeEvent => {
    let boxArray=[...this.state.checks, changeEvent.target.id];
    if(this.state.checks.includes(changeEvent.target.id)){
      boxArray = boxArray.filter(check => check !== changeEvent.target.id);
    }
  
    this.setState({
      checks: boxArray,
    });

  };

  //move functionality
  handleCheckSubmit = formCSubmitEvent => {
    formCSubmitEvent.preventDefault();
    //array of id strings for delete
    let stringarr = this.state.checks.map((c)=>
      db.collection("unverified").doc(String(c))
    .get()
    .then(function(doc) {
      if (doc.exists) {
        //console.log("Document data:", doc.data());
        //push doc with same name to verified collection
        db.collection("verified").doc(String(c)).set(doc.data());
        //delete document from unverified collection
        db.collection("unverified").doc(String(c)).delete().then(()=>{
            console.log("Document successfully deleted!");
        }).catch((error)=>{
          console.error("Error removing document: ", error);
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    )
    
  };

  render() {
    let displayDocs = this.state.docs.map((d) =>(  
      
      <div key={d.docID}>
        <h1>Submission ID: {d.docID}</h1>
        <p><strong>Name of Person: </strong> {d.name}</p>
        <p><strong>Date: </strong> {d.date}</p>
        <p><strong>City: </strong> {d.city}</p>
        <p><strong>Country: </strong> {d.country}</p>
        <p><strong>Name of Source: </strong> {d.sourcename}</p>
        <p><strong>Source link: </strong> {d.link}</p>
        <p><strong>Event Description:</strong> {d.description}</p>
        <div>
        <label>
        Validate {d.docID}?   
        <input
                  id={d.docID}
                  type="checkbox"
                  onChange={this.handleCheckboxChange}
        />
        </label>
        </div>
      </div> 
    ))

    return (
      <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>      <form>
        <h1>Submission Verification Portal</h1>
        <p>Filter by country:</p>
        <input
          type="text"
          onChange={this.myCountrychangeHandler}
        />
        <p>Filter by city:</p>
        <input
          type="text"
          onChange={this.myCitychangeHandler}
        />
        <br />
        <br />
        <button onClick={this.handleFormSubmit.bind(this)}>Submit</button>
        <br />
        <br />
        <button onClick={this.handleAllQuery.bind(this)}>View All Unverified Submissions</button>     
        </form>
        {displayDocs}
        <br />
        <br />
        <button onClick={this.handleCheckSubmit.bind(this)}>Verify Checked Info</button>
        <br />
        <br />
      </div>
    );
}
}
