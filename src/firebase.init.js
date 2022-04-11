// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgpVByZHbyUagsaPUqgrAxR0kqaDqwmKk",
  authDomain: "genius-car-services-43b39.firebaseapp.com",
  projectId: "genius-car-services-43b39",
  storageBucket: "genius-car-services-43b39.appspot.com",
  messagingSenderId: "527626824908",
  appId: "1:527626824908:web:d3f5bc7fc60cb43a2de669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;