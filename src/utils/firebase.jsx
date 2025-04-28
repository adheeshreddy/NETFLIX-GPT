// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIsq8ScMuBUC_gNsJjbeDWzF0LDimnQ14",
  authDomain: "netflixgpt-ebe6c.firebaseapp.com",
  projectId: "netflixgpt-ebe6c",
  storageBucket: "netflixgpt-ebe6c.firebasestorage.app",
  messagingSenderId: "814443317179",
  appId: "1:814443317179:web:00c19b0ad7435109f5669e",
  measurementId: "G-Z4ENCXF4K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();