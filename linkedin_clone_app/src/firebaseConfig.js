// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATYSTpInKQI3Ru0gXG8DlVeljjUshxIag",
  authDomain: "linkedin-clone-1729d.firebaseapp.com",
  projectId: "linkedin-clone-1729d",
  storageBucket: "linkedin-clone-1729d.appspot.com",
  messagingSenderId: "606831085394",
  appId: "1:606831085394:web:c3a24443559878ac911c8b",
  measurementId: "G-E9ZDM3KK1X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);