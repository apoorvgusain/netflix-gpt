// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSgZAFdceHp1T-WonzFzKAKKMb-PpmwF4",
  authDomain: "netflixgpt-ffd6d.firebaseapp.com",
  projectId: "netflixgpt-ffd6d",
  storageBucket: "netflixgpt-ffd6d.appspot.com",
  messagingSenderId: "349152827898",
  appId: "1:349152827898:web:3312e7d58a21b320b1ec43",
  measurementId: "G-3P1V6K21GG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
