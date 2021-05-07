import firebase from "firebase";
import 'firebase/storage';

const config = {
        apiKey: "AIzaSyDQo6NTf4fsIjvqbbhISSAx_X6Svtx2LFw",
        authDomain: "onthisdaycwb.firebaseapp.com",
        projectId: "onthisdaycwb",
        storageBucket: "onthisdaycwb.appspot.com",
        messagingSenderId: "570389339615",
        appId: "1:570389339615:web:471b8d5c20067bcb52786a",
        measurementId: "G-C4MWCCVMS2"
};

firebase.initializeApp(config);
const storage = firebase.storage();

export { storage, firebase as default };






