import firebase from "firebase";
import StudentSubmission from "./StudentSubmission";
// FOR TESTING ONLY
import stockPhoto from '../images/home-stock-image.png';
import stockPhoto2 from '../images/sofka-skipwith.jpg'

const db = firebase.firestore();

async function getAllSubmissions(){ 
    // FOR TESTING ONLY ---------------
    const testSub = {
        location: 'London, Englandddddddd',
        eventDate: new Date('03/4/1944'),
        subjectName: 'John Doe',
        images: [stockPhoto],
        submitterName: 'Amy Smith',
    };
    const testSub2 = {
        location: 'St. Petersburg, Russia',
        eventDate: new Date('09/09/1939'),
        subjectName: 'Sofka Skipwith',
        images: [stockPhoto2],
        submitterName: 'Brad Johnson',
    };
    let lst = [];
    //for (let i = 0; i < 7; i++) lst.push(testSub);
    //for (let i = 0; i < 5; i++) lst.push(testSub2);
    //return lst;
    console.log("Hello wolrd");


  let submissionObjects = new Array();
  var i = 0;
  await db.collection('submissions').get().then((submissions) => {
    submissions.forEach((doc) => {
      submissionObjects[i] = new StudentSubmission("title", doc.data().date, doc.data().description, doc.data().images, doc.data().sources, doc.data().studentName, doc.data().submittedDate, "");
      submissionObjects[i] = new StudentSubmission(doc.data().subjectName, doc.data().location, doc.data().description, doc.data().images, doc.data().sources, doc.data().studentName, doc.data().submittedDate, "");

      

      console.log(doc.id);
      console.log(doc.data().date);
      console.log(doc.data().description);
      console.log(doc.data().location);
      console.log(doc.data().images);
      console.log(doc.data().sources);
      console.log(doc.data().studentFirst);
      console.log(doc.data().studentLast);
      console.log(doc.data().subjectName);
      console.log(doc.data().submittedDate);

 
      i+=1;

  })});
  
  return submissionObjects;
};

export default getAllSubmissions;