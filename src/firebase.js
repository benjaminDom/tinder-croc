import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDKdN-bpqynrgOSz_uPSeCmZRm1B4r_J7Q",
    authDomain: "tinder-clone-e3724.firebaseapp.com",
    projectId: "tinder-clone-e3724",
    storageBucket: "tinder-clone-e3724.appspot.com",
    messagingSenderId: "532156775880",
    appId: "1:532156775880:web:ca627e2bfb7c61097c94fd",
    measurementId: "G-D1C30N0Z8B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const database = firebaseApp.firestore();

  export default database;