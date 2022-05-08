import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQuMd0ZGEpC2cjVJE-5mjHE8OjbDclLaM",
    authDomain: "prostack-68ac6.firebaseapp.com",
    projectId: "prostack-68ac6",
    storageBucket: "prostack-68ac6.appspot.com",
    messagingSenderId: "397471452526",
    appId: "1:397471452526:web:14d425ab071e6465d6857f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db }