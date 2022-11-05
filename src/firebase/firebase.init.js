// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDESEEDkMbpqwXM5caqD384LZPBp3ssX7Q",
//   authDomain: "dev-edu-7df34.firebaseapp.com",
//   projectId: "dev-edu-7df34",
//   storageBucket: "dev-edu-7df34.appspot.com",
//   messagingSenderId: "391039009077",
//   appId: "1:391039009077:web:4c4c50716622f4b23c4c7c"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app