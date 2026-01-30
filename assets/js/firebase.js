import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEmvj81M9ErjZXSks8f6-o1FJ2_1wA-_c",
  authDomain: "globalbarite-ce1ea.firebaseapp.com",
  projectId: "globalbarite-ce1ea",
  storageBucket: "globalbarite-ce1ea.firebasestorage.app",
  messagingSenderId: "814025390729",
  appId: "1:814025390729:web:6a24d2646cdc6415cd6458"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
