// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAot9CdaHBMN6WDt7Ph4CxLxdTJo534L50",
    authDomain: "todos-app-gnurt.firebaseapp.com",
    projectId: "todos-app-gnurt",
    storageBucket: "todos-app-gnurt.appspot.com",
    messagingSenderId: "450923285166",
    appId: "1:450923285166:web:7606cd8d41e9fa542fbb3f",
    measurementId: "G-S7DHTLRKTT"
});

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// export { db }

const db = firebaseApp.firestore();
export default db;