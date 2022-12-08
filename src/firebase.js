// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt5-3b87J88RLKYGd6Zp5LxV5DydCY67A",
  authDomain: "todo-app-yt-759f3.firebaseapp.com",
  projectId: "todo-app-yt-759f3",
  storageBucket: "todo-app-yt-759f3.appspot.com",
  messagingSenderId: "200601541716",
  appId: "1:200601541716:web:808560d5909f4da476a1c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)