import firebase from "firebase";
import StudentSubmission from "./StudentSubmission";

const db = firebase.firestore();

async function getAllVerified(){ 
  let submissionObjects = [];

  await db.collection('verified').get().then((submissions) => {
    submissions.forEach((doc) => {
      const coordinates = doc.data().coordinates.toJSON();

      submissionObjects.push(new StudentSubmission(
        doc.id,
        doc.data().subjectName,
        doc.data().location,
        doc.data().coordinates.latitude,
        doc.data().coordinates.longitude,
        doc.data().date.toDate(),
        doc.data().description,
        doc.data().imageList, //map
        doc.data().sources,
        `${doc.data().studentFirst} ${doc.data().studentLast}`,
        doc.data().submittedDate,
        "")); // TODO: add class names
    });
  });

  return submissionObjects;
};

export default getAllVerified;