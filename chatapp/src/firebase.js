// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj5KS2xAaEOQh9JW2txrSZdHuwECUQuBE",
  authDomain: "chat-app-talkapp.firebaseapp.com",
  projectId: "chat-app-talkapp",
  storageBucket: "chat-app-talkapp.appspot.com",
  messagingSenderId: "499741520918",
  appId: "1:499741520918:web:c1661e39e2203c187ff137"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()