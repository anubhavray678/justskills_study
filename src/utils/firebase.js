// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "justskills-5e191.firebaseapp.com",
  projectId: "justskills-5e191",
  storageBucket: "justskills-5e191.appspot.com",
  messagingSenderId: "455352378844",
  appId: "1:455352378844:web:73f917d00e1b464acd1b19",
  measurementId: "G-7BGKLMTM4G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
