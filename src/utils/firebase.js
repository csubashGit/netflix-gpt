// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeMBOTD6UDJM-AYpanx-6fJQMXbU9oF4o",
  authDomain: "netflixgpt-de5e5.firebaseapp.com",
  projectId: "netflixgpt-de5e5",
  storageBucket: "netflixgpt-de5e5.appspot.com",
  messagingSenderId: "1018141360709",
  appId: "1:1018141360709:web:9bc6dc07cba7a886ed592c",
  measurementId: "G-KYEMHT66N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();