import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEmvj81M9ErjZXSks8f6-o1FJ2_1wA-_c",
  authDomain: "globalbarite-ce1ea.firebaseapp.com",
  projectId: "globalbarite-ce1ea",
  storageBucket: "globalbarite-ce1ea.firebasestorage.app",
  messagingSenderId: "814025390729",
  appId: "1:814025390729:web:6a24d2646cdc6415cd6458",
  measurementId: "G-9TP0SELMJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { auth, db };
