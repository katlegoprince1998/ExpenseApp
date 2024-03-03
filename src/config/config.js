// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9D_RsYqBom_9kNlh5_jzvSCPmsLNeOl8",
  authDomain: "expense-app-a81e5.firebaseapp.com",
  projectId: "expense-app-a81e5",
  storageBucket: "expense-app-a81e5.appspot.com",
  messagingSenderId: "1014236346748",
  appId: "1:1014236346748:web:ab825c8a93b530b6c60cf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

