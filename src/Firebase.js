// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFphmE9TlADGVsmjwRu_3y1pU5H8QywJM",
  authDomain: "clone-1b93b.firebaseapp.com",
  projectId: "clone-1b93b",
  storageBucket: "clone-1b93b.appspot.com",
  messagingSenderId: "699823621265",
  appId: "1:699823621265:web:37763ecf5fcc2049296b30",
  measurementId: "G-28JBZZF1PD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);