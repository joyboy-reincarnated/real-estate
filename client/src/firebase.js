// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-321cf.firebaseapp.com",
  projectId: "mern-estate-321cf",
  storageBucket: "mern-estate-321cf.appspot.com",
  messagingSenderId: "1065256085350",
  appId: "1:1065256085350:web:d11e324378cfcc62ee4aa7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);