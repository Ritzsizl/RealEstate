// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "heavenhunt-b213b.firebaseapp.com",
  projectId: "heavenhunt-b213b",
  storageBucket: "heavenhunt-b213b.firebasestorage.app",
  messagingSenderId: "82367606459",
  appId: "1:82367606459:web:df497a54888af306db839e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);