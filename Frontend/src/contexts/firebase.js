// src/contexts/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjdJJ8JoF5i-CAyUd_RrHlMt5LJe0h3eE",
  authDomain: "curemed-webstore-project.firebaseapp.com",
  projectId: "curemed-webstore-project",
  storageBucket: "curemed-webstore-project.firebasestorage.app",
  messagingSenderId: "245803497080",
  appId: "1:245803497080:web:a47345a59c9105d09bdf8d",
  measurementId: "G-Q6F5ZHS39T"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Create auth instance
const auth = getAuth(app);

export { app, analytics, auth };
