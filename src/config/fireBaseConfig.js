import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyChzoUu4I2cIFULWm1EdpgRCb3zGiPZ8ec",
  authDomain: "news-app-by-abhishek.firebaseapp.com",
  projectId: "news-app-by-abhishek",
  storageBucket: "news-app-by-abhishek.appspot.com",
  messagingSenderId: "944283554874",
  appId: "1:944283554874:web:4d7770577fa3aed131d103",
  measurementId: "G-C8E5C6MXP4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth,app};