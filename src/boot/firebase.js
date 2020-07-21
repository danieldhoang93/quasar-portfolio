import * as firebase from "firebase/app";

//add firebase products used
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBcjLDOLwy-ToVmNrE61oZgJGO9jKhv5hQ",
  authDomain: "quasar-portfolio.firebaseapp.com",
  databaseURL: "https://quasar-portfolio.firebaseio.com",
  projectId: "quasar-portfolio",
  storageBucket: "quasar-portfolio.appspot.com",
  messagingSenderId: "996384979999",
  appId: "1:996384979999:web:a343a6d479d1da43a9e92a"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

//export these so we can use them
export { firebaseAuth, firebaseDb }