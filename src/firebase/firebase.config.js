// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYr9lBKdhSM4Pby6rW40OLzFuIEwSXL3U",
  authDomain: "technology-and-electroni-c64c7.firebaseapp.com",
  projectId: "technology-and-electroni-c64c7",
  storageBucket: "technology-and-electroni-c64c7.appspot.com",
  messagingSenderId: "50992000978",
  appId: "1:50992000978:web:f063d17b912948fc06620b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;