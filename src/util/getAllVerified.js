import firebase from "firebase";
import StudentSubmission from "./StudentSubmission";

const db = firebase.firestore();

async function getAllVerified(){ 
  let submissionObjects = [];

  await db.collection('verified').get().then((submissions) => {
    submissions.forEach((doc) => {
      submissionObjects.push(new StudentSubmission(
        doc.id,
        doc.data().subjectName,
        doc.data().location,
        doc.data().date,
        doc.data().description,
        doc.data().images,
        doc.data().sources,
        `${doc.data().studentFirst} ${doc.data().studentLast}`,
        doc.data().submittedDate,
        "")); // TODO: add class names
    });
  });

  return submissionObjects;
};

export default getAllVerified;