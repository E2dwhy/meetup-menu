// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7EBjFtVVdSw3Cv6acqQ8jnGnuZR9QMVc",
  authDomain: "meetup-lounge.firebaseapp.com",
  projectId: "meetup-lounge",
  storageBucket: "meetup-lounge.firebasestorage.app",
  messagingSenderId: "923416917581",
  appId: "1:923416917581:web:b7e3f298878dc18fca8e04",
  measurementId: "G-899J0G9X0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const analytics = getAnalytics(app);
export { app, analytics, db, storage };