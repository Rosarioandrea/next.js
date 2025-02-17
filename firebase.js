// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA22fMVlkN-iIMCyxJFZR3VmRtZl2hug0M",
  authDomain: "proyecto-coder-2463f.firebaseapp.com",
  projectId: "proyecto-coder-2463f",
  storageBucket: "proyecto-coder-2463f.firebasestorage.app",
  messagingSenderId: "888588545988",
  appId: "1:888588545988:web:d83f091c3bf957ba5c3e91",
  measurementId: "G-F89J56EKWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
