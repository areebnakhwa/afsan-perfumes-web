import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// APNI FIREBASE CONFIG VALUES YAHAN PASTE KARO
const firebaseConfig = {
  apiKey: "AIzaSyBaie7C9K8i-kY06xAveCjGdkIDJNlQ5S4",
  authDomain: "afsan-perfumes.firebaseapp.com",
  projectId: "afsan-perfumes",
  storageBucket: "afsan-perfumes.firebasestorage.app",
  messagingSenderId: "527330670130",
  appId: "1:527330670130:web:1c5458edfa480cf45b6e2b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
