// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0mzsWA2XAVfcnwKk7r-hT1AQf4dmOfH4",
    authDomain: "learner-academy.firebaseapp.com",
    projectId: "learner-academy",
    storageBucket: "learner-academy.appspot.com",
    messagingSenderId: "978214749188",
    appId: "1:978214749188:web:aa9c65ebd62e42600be151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;