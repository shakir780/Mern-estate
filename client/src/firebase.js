// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log();
const firebaseConfig = {
  apiKey: "AIzaSyBFl9mN8Dzq9vhWAFWCDmmJ-EhEuCAj3xU",
  authDomain: "mern-estate-f6701.firebaseapp.com",
  projectId: "mern-estate-f6701",
  storageBucket: "mern-estate-f6701.appspot.com",
  messagingSenderId: "62377776638",
  appId: "1:62377776638:web:b8d6bd6e8bea6609281caf",
  measurementId: "G-W5DBSW7Y75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
