// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWD3cymv129KeOK8KvsRTUZBymGsxlyZY",
  authDomain: "react-project-91975.firebaseapp.com",
  projectId: "react-project-91975",
  storageBucket: "react-project-91975.firebasestorage.app",
  messagingSenderId: "899714075725",
  appId: "1:899714075725:web:6f123f76cfac8319cea004",
  measurementId: "G-J477KQ7CT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);  