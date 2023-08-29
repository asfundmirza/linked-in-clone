import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCWMGSfsdPTqUTEsZSu9uWGRgi-pa23ByA",
  authDomain: "linkedin-clone-cf8e4.firebaseapp.com",
  projectId: "linkedin-clone-cf8e4",
  storageBucket: "linkedin-clone-cf8e4.appspot.com",
  messagingSenderId: "891738184476",
  appId: "1:891738184476:web:13289666424893200db8d9",
  measurementId: "G-L5BTW38F8D",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
