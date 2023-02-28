// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9DRAmYVwvaucccZzalLVRHLfVMT34O2I",
  authDomain: "crwn-clothing-db-72814.firebaseapp.com",
  projectId: "crwn-clothing-db-72814",
  storageBucket: "crwn-clothing-db-72814.appspot.com",
  messagingSenderId: "325050201807",
  appId: "1:325050201807:web:cfcd23fccee76af294e9ba",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// in order to use the auth service we need to initialize the provider. in this case google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
  login_hint: "user@example.com",
});

// create the authentication instance
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
