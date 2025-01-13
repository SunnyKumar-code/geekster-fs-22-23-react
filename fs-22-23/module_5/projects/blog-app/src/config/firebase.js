// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFwjmd6gWlxj-Gp-_IDamk7KCRcn88HU0",
    authDomain: "sunlit-utility-417915.firebaseapp.com",
    projectId: "sunlit-utility-417915",
    storageBucket: "sunlit-utility-417915.firebasestorage.app",
    messagingSenderId: "40957692844",
    appId: "1:40957692844:web:f1173d8faaa60f9f920809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Todo : Write the code to initialize specific service based on your requirement
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app);