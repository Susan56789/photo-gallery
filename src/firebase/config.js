import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


//firebase configurations
const firebaseConfig = {
    apiKey: "AIzaSyBqoUmUGnprohKdmeaZNBERvwYt_Gb5UG0",
    authDomain: "react-firegram-2018c.firebaseapp.com",
    projectId: "react-firegram-2018c",
    storageBucket: "react-firegram-2018c.appspot.com",
    messagingSenderId: "888924904921",
    appId: "1:888924904921:web:4808c031365ca0ac078dc8"
  };

  //initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};

  