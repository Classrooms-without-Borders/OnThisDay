import firebase from "firebase";
import StudentSubmission from "./StudentSubmission";

const db = firebase.firestore();

function getAllSubmissions(){ 
  let documents = []
  db.collection('submissions').get().then((submissions) => {
    submissions.forEach((doc) => {
      documents[doc.id] = doc.data();
  })});
  const submissionObjects = [];
  console.log(documents);
  for (var i = 0; i < documents.length; i++){
    submissionObjects[i] = new StudentSubmission(documents.eventTitle, documents.eventDate, documents.eventDescrip, documents.image, documents.source, documents.studentName, documents.submitDate, documents.className);
  }
  console.log(submissionObjects);
  return submissionObjects;
};

export default getAllSubmissions;