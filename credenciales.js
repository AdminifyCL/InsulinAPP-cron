// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBdJq8IOtsomsJpozMuZ1fna1L7C_9tmQk',
  authDomain: 'insulinapp-68960.firebaseapp.com',
  projectId: 'insulinapp-68960',
  storageBucket: 'insulinapp-68960.appspot.com',
  messagingSenderId: '21302089637',
  appId: '1:21302089637:web:02f0240b3ffa2459da7a4c',
  measurementId: 'G-0C10FK4B5K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default appFirebase;
export { appFirebase, auth };
