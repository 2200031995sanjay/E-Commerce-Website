// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-cOlTfPJxdsRKfLK2FdFw6xrrg-HBziQ",
  authDomain: "e-commerce-website-402e7.firebaseapp.com",
  projectId: "e-commerce-website-402e7",
  storageBucket: "e-commerce-website-402e7.firebasestorage.app",
  messagingSenderId: "139577120546",
  appId: "1:139577120546:web:c852e30afa95424534377b",
  measurementId: "G-CLLBJZLJ8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);