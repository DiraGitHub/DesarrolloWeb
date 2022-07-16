// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUVJ-OCuqXWA_Eb_V5cTJdB19g5_4NdpE",
  authDomain: "ivesback.firebaseapp.com",
  projectId: "ivesback",
  storageBucket: "ivesback.appspot.com",
  messagingSenderId: "513917769897",
  appId: "1:513917769897:web:3f254e5949bc3d4a2271b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbIves = getFirestore(app);