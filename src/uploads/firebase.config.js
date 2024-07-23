// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBWb0syu884doPlKNbxeCf05Gbx_oQiiFA",
  authDomain: "upload-with-firebase-dfed4.firebaseapp.com",
  projectId: "upload-with-firebase-dfed4",
  storageBucket: "upload-with-firebase-dfed4.appspot.com",
  messagingSenderId: "976453421887",
  appId: "1:976453421887:web:fa0cf3adaab8ef632ae18a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
