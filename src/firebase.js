// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7tLZTuOckhumsCklaC9YzuoWP6yw3nfg",
    authDomain: "simplenoteapp-4c1af.firebaseapp.com",
    projectId: "simplenoteapp-4c1af",
    storageBucket: "simplenoteapp-4c1af.appspot.com",
    messagingSenderId: "13575391583",
    appId: "1:13575391583:web:4ce21f17c92e44d51d4eea",
    measurementId: "G-4JE02WXVR1"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
