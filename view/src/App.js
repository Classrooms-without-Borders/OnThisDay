import logo from './logo.svg';
import './App.css';
import firebase from './Firestore'
//import firebase from 'firebase/app';
import 'firebase/firestore';


function App() {

    let db = firebase.firestore();
    let docRef = db.collection("classes").doc("CTodKLrFNrf3b8k4E6X1");
    //let document;

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

//}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Classroom without borders
        </p>
       
      </header>
    </div>

     
  );


  //submission with name
  //search function
  
}

export default App;
