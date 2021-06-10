import firebase from "firebase";
import StudentSubmission from "./StudentSubmission";
// FOR TESTING ONLY
import stockPhoto from '../images/home-stock-image.png';
import stockPhoto2 from '../images/sofka-skipwith.jpg'

const db = firebase.firestore();

async function getAllSubmissions(){ 
  let submissionObjects = [];

  await db.collection('submissions').get().then((submissions) => {
    submissions.forEach((doc) => {
      submissionObjects.push(new StudentSubmission(
        doc.id,
        doc.data().subjectName,
        doc.data().location,
        doc.data().date,
        doc.data().description,
        doc.data().images,
        doc.data().sources,
        doc.data().studentName,
        doc.data().submittedDate,
        "")); // TODO: add class names
    });
  });

  return submissionObjects;
};

export default getAllSubmissions;