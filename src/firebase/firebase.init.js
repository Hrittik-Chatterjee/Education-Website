// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKYRCdsPC8ZO59NCrnDsQYeI0jMLDO0sc",
  authDomain: "edu-10-dcfcd.firebaseapp.com",
  projectId: "edu-10-dcfcd",
  storageBucket: "edu-10-dcfcd.appspot.com",
  messagingSenderId: "492570209532",
  appId: "1:492570209532:web:bd0fb5194786d5a98cbb79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app