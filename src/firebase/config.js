import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCW3v7jVDKRq7zRMpIz5QqBAYZgtQAQeLQ",
    authDomain: "olx1-bc94c.firebaseapp.com",
    projectId: "olx1-bc94c",
    storageBucket: "olx1-bc94c.appspot.com",
    messagingSenderId: "733143960299",
    appId: "1:733143960299:web:51fd1835c54485e3eaccae",
    measurementId: "G-PMFGRKNDYR"
  };

  export default firebase.initializeApp(firebaseConfig)