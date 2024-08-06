// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import exp from "constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHP_kFo9EqXnB56asmiVGaTsnqvK77DnI",
  authDomain: "inventory-management-22ef0.firebaseapp.com",
  projectId: "inventory-management-22ef0",
  storageBucket: "inventory-management-22ef0.appspot.com",
  messagingSenderId: "823392680429",
  appId: "1:823392680429:web:4f0f20a02a9ddf695c0fe4",
  measurementId: "G-9HNTC3QKM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}