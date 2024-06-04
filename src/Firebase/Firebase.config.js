// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_apiKey,
  projectId: import.meta.env.VITE_apiKey,
  storageBucket: import.meta.env.VITE_apiKey,
  messagingSenderId: import.meta.env.VITE_apiKey,
  appId: import.meta.env.VITE_apiKey,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app