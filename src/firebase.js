// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZw19IBi-gvxoKGmV5CAuf6zLniP7tUNE",
    authDomain: "elite-ceremony-366009.firebaseapp.com",
    projectId: "elite-ceremony-366009",
    storageBucket: "elite-ceremony-366009.appspot.com",
    messagingSenderId: "1081251047556",
    appId: "1:1081251047556:web:6f52006d4b6facaa4a3ad1",
    measurementId: "G-J57TLWLZVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
