// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz5cHrihq2I6ispzaNYC8XNjnPSsBo0J0",
  authDomain: "uninet-test.firebaseapp.com",
  projectId: "uninet-test",
  storageBucket: "uninet-test.appspot.com",
  messagingSenderId: "64459254129",
  appId: "1:64459254129:web:e91e4b2d62c9fd2a326ed0",
  measurementId: "G-QSCXC4RR2R",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
