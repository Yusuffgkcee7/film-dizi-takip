import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1CneCBtyzwRYnBxT__FaiuCugi5wWopU",
  authDomain: "film-projesii.firebaseapp.com",
  projectId: "film-projesii",
  storageBucket: "film-projesii.firebasestorage.app",
  messagingSenderId: "267671145442",
  appId: "1:267671145442:web:8d88f4163f2933d11587bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);