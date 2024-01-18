// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbWE29UhTtCT3fpiScruVNDVR0zmgINMA",
  authDomain: "budgetapp-51feb.firebaseapp.com",
  projectId: "budgetapp-51feb",
  storageBucket: "budgetapp-51feb.appspot.com",
  messagingSenderId: "838258813823",
  appId: "1:838258813823:web:617b39290cbb424b9c884a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

const budgetDBRef=collection(db,"budgetData")