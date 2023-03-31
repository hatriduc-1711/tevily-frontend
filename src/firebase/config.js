// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBA8bOHr51H63xdyXfqZZN4pJIAqWoWWIw',
    authDomain: 'tevily-2e291.firebaseapp.com',
    projectId: 'tevily-2e291',
    storageBucket: 'tevily-2e291.appspot.com',
    messagingSenderId: '170065744185',
    appId: '1:170065744185:web:95af70a1fb4b2860bb18e8',
    measurementId: 'G-9EYTLVPMYW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
