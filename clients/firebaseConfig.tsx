// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWSit6wnNSMyOVCHPrQqYjzSX-V2PWtpA",
  authDomain: "sample-project-5bb02.firebaseapp.com",
  projectId: "sample-project-5bb02",
  storageBucket: "sample-project-5bb02.appspot.com",
  messagingSenderId: "409579614560",
  appId: "1:409579614560:web:dba9923a415de0b1fa6e05",
  measurementId: "G-CF08LVP3N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
