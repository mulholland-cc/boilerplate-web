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
  apiKey: "AIzaSyC14s7-div7GUpzi4A20e0D8xMHU3RsT5k",
  authDomain: "pantry-club.firebaseapp.com",
  projectId: "pantry-club",
  storageBucket: "pantry-club.appspot.com",
  messagingSenderId: "718347898465",
  appId: "1:718347898465:web:793d6eb365fea37be72420",
  measurementId: "G-BFPTSSLRVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
