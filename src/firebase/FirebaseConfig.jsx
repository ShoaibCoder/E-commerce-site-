
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCkNGGSgBNh8UIBfYopEtCa0_TcsS6PbCw",
  authDomain: "shop-ec315.firebaseapp.com",
  projectId: "shop-ec315",
  storageBucket: "shop-ec315.appspot.com",
  messagingSenderId: "835950391321",
  appId: "1:835950391321:web:c511ffcb84c0a2ff343a88",
  measurementId: "G-VPE9DGYCFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {auth, fireDB}