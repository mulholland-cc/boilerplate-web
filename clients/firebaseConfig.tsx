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
  apiKey: "AIzaSyCbIg3Ie-m0QgCVnNTHvm3a0ERY1L7396s",
  authDomain: "sample-project-55cc0.firebaseapp.com",
  projectId: "sample-project-55cc0",
  storageBucket: "sample-project-55cc0.appspot.com",
  messagingSenderId: "181608956140",
  appId: "1:181608956140:web:1c9cd2a3624dc820b5a5c9",
  measurementId: "G-WF3JX4GPNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
