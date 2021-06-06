import '../styling/AdminPortal.css';
import React, {Component} from "react";
import firebase from 'firebase/app';
import 'firebase/firestore'

//firebase init stuff
const firebaseConfig = {
  apiKey: "AIzaSyDQo6NTf4fsIjvqbbhISSAx_X6Svtx2LFw",
  authDomain: "onthisdaycwb.firebaseapp.com",
  projectId: "onthisdaycwb",
  storageBucket: "onthisdaycwb.appspot.com",
  messagingSenderId: "570389339615",
  appId: "1:570389339615:web:471b8d5c20067bcb52786a",
  measurementId: "G-C4MWCCVMS2"
};
// Initialize Firebase database and stop it from refreshing
if (!firebase.apps.length){
  //firebase.initializeApp(firebaseConfig);
}

let db=firebase.firestore();
//class function for displaying all output
class AdminPortal extends Component{

  //constructor for array holding unverified collection
  constructor(props) {
    super(props);
    this.state={
      docs: [],
      checks: [],
    }
  }
  
  //populate options and create checkbox for eah option so it can be rendered


  //get ALL the data from the unverified database and put it into docs array
  //also populate options checkbox array with corresponding name
componentDidMount = () => {
  console.log("welcome2")
    db.collection("submissions").get().then((snapshot) => (
      snapshot.forEach((doc) => (
        console.log(doc.data().subjectName),
        this.setState((prevState) => ({

          docs: [...prevState.docs, {
            docID: doc.id,
            name: doc.data().subjectName,
            description: doc.data().description,
            date: doc.data().date.toString(),
            studentfirst: doc.data().studentFirst,
            studentlast: doc.data().studentLast,
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

  //function to create a named checkbox
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    //array of id strings for delete
    let stringarr = this.state.checks.map((c)=>
      db.collection("submissions").doc(String(c))
    .get()
    .then(function(doc) {
      if (doc.exists) {
        //console.log("Document data:", doc.data());
        //push doc with same name to verified collection
        db.collection("verified").doc(String(c)).set(doc.data());
        //delete document from unverified collection
        db.collection("submissions").doc(String(c)).delete().then(()=>{
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


  //render the data grabbed from database
  render() {
    let displayDocs = this.state.docs.map((d) =>(  
      <div key={d.docID}>
        <h1>Submission ID: {d.docID}</h1>
        <p><strong>Name of Person: </strong> {d.name}</p>
        <p><strong>Date: </strong> {d.date}</p>
        <p><strong>Event Description:</strong> {d.description}</p>
        <div>
        <label>
        Validate {d.name}?
        <input
                  id={d.docID}
                  type="checkbox"
                  onChange={this.handleCheckboxChange}
        />
        </label>
        </div>
      </div>
    ))

    //create array of checkboxes
    //if checked, match index with corresponding doc index and delete accordingly
    
    return(
      <p>
        {displayDocs}
        <br />
        <br />
        <button onClick={this.handleFormSubmit.bind(this)}>Submit</button>
      </p> 
      
    );
  }
}
export default AdminPortal;
