import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAD_uJcDJiHlo3hVF9AFhehoIiKVqGF8q8",
    authDomain: "fir-8a579.firebaseapp.com",
    projectId: "fir-8a579",
    storageBucket: "fir-8a579.firebasestorage.app",
    messagingSenderId: "333391501177",
    appId: "1:333391501177:web:306d4bddb7ab1aa9d941a8"
  };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 const db = getFirestore(app);


 export {app,
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  GoogleAuthProvider,
  provider,
  signInWithPopup,
  db,
  getFirestore,
  collection, 
  addDoc,getDocs,
  Timestamp,
  query,
  orderBy, limit,doc, deleteDoc
}


