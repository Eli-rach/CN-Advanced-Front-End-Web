
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWUzPKCZP9ew261X_eZ0o3z1waI_o0e34",
  authDomain: "user-auth-to-do.firebaseapp.com",
  projectId: "user-auth-to-do",
  storageBucket: "user-auth-to-do.appspot.com",
  messagingSenderId: "502437716392",
  appId: "1:502437716392:web:a252db72c1d78606407d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)