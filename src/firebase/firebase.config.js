// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrH9QusNzysA3xV6usM0gDrpKLp2Scvq8",
  authDomain: "dragon-news-auth-cb4ec.firebaseapp.com",
  projectId: "dragon-news-auth-cb4ec",
  storageBucket: "dragon-news-auth-cb4ec.firebasestorage.app",
  messagingSenderId: "1049739316059",
  appId: "1:1049739316059:web:eec42615f751200f27287e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;