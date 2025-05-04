// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBm4l_LOGqjyowKUF_xT5BI_4TcJUyLnw",
  authDomain: "todolist-85785.firebaseapp.com",
  projectId: "todolist-85785",
  storageBucket: "todolist-85785.firebasestorage.app",
  messagingSenderId: "176532630069",
  appId: "1:176532630069:web:e3fcdcf128d07c14aa5f7c",
  measurementId: "G-VW3GCWSVRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);