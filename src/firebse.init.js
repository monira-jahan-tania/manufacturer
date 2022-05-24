// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC34BH8VhhP6m5geMNQl2m1-x6DjJYoN4o",
    authDomain: "anyasha-tech.firebaseapp.com",
    projectId: "anyasha-tech",
    storageBucket: "anyasha-tech.appspot.com",
    messagingSenderId: "554275875882",
    appId: "1:554275875882:web:ea62684291485a5e4ae753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;