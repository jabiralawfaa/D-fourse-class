// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Ini adalah config yang bisa Anda dapatkan dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDMDgEthyIda4ps8aweDsIhWCXMxmDza0E",
  authDomain: "d-fourse.firebaseapp.com",
  projectId: "d-fourse",
  storageBucket: "d-fourse.appspot.com",
  messagingSenderId: "362578272033",
  appId: "1:362578272033:web:1721d58ac12b486dfae860",
  measurementId: "G-MQMLFSE5DB",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
