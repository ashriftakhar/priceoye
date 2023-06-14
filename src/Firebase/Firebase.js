// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn_Do1s4KUqfjwKATUtxe2lm8Y-nZAVTM",
  authDomain: "priceoye-da279.firebaseapp.com",
  databaseURL: "https://priceoye-da279-default-rtdb.firebaseio.com",
  projectId: "priceoye-da279",
  storageBucket: "priceoye-da279.appspot.com",
  messagingSenderId: "12128180662",
  appId: "1:12128180662:web:1b94bcd64862d64d418917",
  measurementId: "G-PMYZCTY606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);






// function writeUserData(userId, name, email){

//   const db = getDatabase(app);
//   const reference = ref(db, 'users/' + userId);
  
//   set(reference, {
//     username: name,
//     email: email,
//   })
// }
//   writeUserData("asd", "asdfa", "sdfasf")

// const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)
// export const firestore = firebase.firestore();