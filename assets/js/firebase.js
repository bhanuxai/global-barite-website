import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjDVeQjfjARcpCAyPiMXXhtMhlhQHNOg8",
  authDomain: "globalbarite.firebaseapp.com",
  projectId: "globalbarite",
  storageBucket: "globalbarite.firebasestorage.app",
  messagingSenderId: "236099438361",
  appId: "1:236099438361:web:6e004e66adc6fafe13e788"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
