import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn4_YWDgWtm7NC0kaLfgYgGO1kQnc28Dg",
  authDomain: "pomocus-3be4e.firebaseapp.com",
  projectId: "pomocus-3be4e",
  storageBucket: "pomocus-3be4e.appspot.com",
  messagingSenderId: "932443159324",
  appId: "1:932443159324:web:2461bd934f0e5f40fa98d9",
  measurementId: "G-NRRJE9EK5J"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };