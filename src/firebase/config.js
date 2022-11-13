import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAHwMRCEDzQTflDMyZX-m8txM0kICBZ8Co",
    authDomain: "know-your-errors.firebaseapp.com",
    projectId: "know-your-errors",
    storageBucket: "know-your-errors.appspot.com",
    messagingSenderId: "187142752533",
    appId: "1:187142752533:web:0968adcc2e7cdb9272411c",
    measurementId: "G-JMFLDZT9NK"
  };


  // init firebase 
  firebase.initializeApp(firebaseConfig)
  
  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
 
  export {projectFirestore,timestamp,projectAuth}