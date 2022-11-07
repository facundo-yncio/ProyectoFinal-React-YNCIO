// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV2WNOBRHWEj8xrb5whmIQAXnvLQKrupE",
  authDomain: "reactjs-yncio-ch.firebaseapp.com",
  projectId: "reactjs-yncio-ch",
  storageBucket: "reactjs-yncio-ch.appspot.com",
  messagingSenderId: "733544435077",
  appId: "1:733544435077:web:8d70c78f0ab8f1f6b3c8ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Configuro la conexión con FB

export const db = getFirestore(app) //creo una referencia a la base de datos de FB