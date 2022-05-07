import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQuMd0ZGEpC2cjVJE-5mjHE8OjbDclLaM",
    authDomain: "prostack-68ac6.firebaseapp.com",
    projectId: "prostack-68ac6",
    storageBucket: "prostack-68ac6.appspot.com",
    messagingSenderId: "397471452526",
    appId: "1:397471452526:web:14d425ab071e6465d6857f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;