import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";


const app = firebase.initializeApp({
    apiKey: "AIzaSyDQo6NTf4fsIjvqbbhISSAx_X6Svtx2LFw",
    authDomain: "onthisdaycwb.firebaseapp.com",
    projectId: "onthisdaycwb",
    storageBucket: "onthisdaycwb.appspot.com",
    messagingSenderId: "570389339615",
    appId: "1:570389339615:web:471b8d5c20067bcb52786a",
    measurementId: "G-C4MWCCVMS2"


})
const storage = firebase.storage();

const auth = app.auth();
//export default app;
export { storage, auth,  app as default };
