import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAnAUK_LACSNO6f5VX4RoDWiYoZHuLt3Xw",
  authDomain: "reactjs-c3694.firebaseapp.com",
  projectId: "reactjs-c3694",
  storageBucket: "reactjs-c3694.appspot.com",
  messagingSenderId: "705004877747",
  appId: "1:705004877747:web:332d8b5b5b3a117c907dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);