// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2vQaoypcmnoCfXXeXICxCjGfnlcdfP1o",
    authDomain: "mandatory1-add9f.firebaseapp.com",
    projectId: "mandatory1-add9f",
    storageBucket: "mandatory1-add9f.appspot.com",
    messagingSenderId: "40115225087",
    appId: "1:40115225087:web:f4bf113c4f3628be4827ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);