
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAR6ZZbHEJr4u7jLRCbTLd_9aG3_QyxIvE",
  authDomain: "clone-2cc5e.firebaseapp.com",
  projectId: "clone-2cc5e",
  storageBucket: "clone-2cc5e.appspot.com",
  messagingSenderId: "938333081787",
  appId: "1:938333081787:web:b8b6a4a75d6b412186999e"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };