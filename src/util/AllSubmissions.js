import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQo6NTf4fsIjvqbbhISSAx_X6Svtx2LFw",
    authDomain: "onthisdaycwb.firebaseapp.com",
    projectId: "onthisdaycwb",
    storageBucket: "onthisdaycwb.appspot.com",
    messagingSenderId: "570389339615",
    appId: "1:570389339615:web:471b8d5c20067bcb52786a",
    measurementId: "G-C4MWCCVMS2"
});
const db = firebaseApp.firestore();

export function getAllSubmissions(){ 
  let submissions = db.collection('submission').get();
  const documents = [];
  submissions.forEach(doc => {
    documents[doc.id] = doc.data();
  });
  const submissionObjects = [];
  for (var i = 0; i < documents.length; i++){
    submissionObjects[i] = new StudentSubmission(documents.eventTitle, documents.eventDate, documents.eventDescrip, documents.image, documents.source, documents.studentName, documents.submitDate, documents.className);
  }
  return submissionObjects;
};