// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-Jwg39DUDGLCRSLQ4rk-pI4hLxf1xdmA",
  authDomain: "sin-nombre-7aefb.firebaseapp.com",
  projectId: "sin-nombre-7aefb",
  storageBucket: "sin-nombre-7aefb",
  messagingSenderId: "287920890752",
  appId: "1:287920890752:web:da803415b9b3bbf2339765",
  measurementId: "G-K54MZQK6GZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
