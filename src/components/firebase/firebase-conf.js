import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChOKMIpbSibjN20w-z9vhgPyzXaLGCoUo",
  authDomain: "portfolioblog-22a8d.firebaseapp.com",
  projectId: "portfolioblog-22a8d",
  storageBucket: "portfolioblog-22a8d.appspot.com",
  messagingSenderId: "686227830239",
  appId: "1:686227830239:web:08fac26d5b9bf6da4e006a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)