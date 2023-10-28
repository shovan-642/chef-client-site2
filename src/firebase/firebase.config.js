// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9NiQORemcK7YZ3HjC0VWkoE9i2AE7zms",
  authDomain: "chef-firebase-project-9cd4f.firebaseapp.com",
  projectId: "chef-firebase-project-9cd4f",
  storageBucket: "chef-firebase-project-9cd4f.appspot.com",
  messagingSenderId: "1070122261552",
  appId: "1:1070122261552:web:0b60ae23f1d6a3be78e1f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;