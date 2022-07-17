// import firebase from "firebase";


// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyABKCjOb7sdKxFHMc5ON4nKgzuv_0KHV9A",
//   authDomain: "e-commerce-mern-992a0.firebaseapp.com",
//   projectId: "e-commerce-mern-992a0",
//   storageBucket: "e-commerce-mern-992a0.appspot.com",
//   messagingSenderId: "889490544449",
//   appId: "1:889490544449:web:b8fa45533dbb4758e6b3c0",
//   measurementId: "G-K4W5MLGCCV"
// });

// const auth = firebase.auth();
// const db = firebaseApp.firestore();

// export { db, auth };

import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyABKCjOb7sdKxFHMc5ON4nKgzuv_0KHV9A",
  authDomain: "e-commerce-mern-992a0.firebaseapp.com",
  projectId: "e-commerce-mern-992a0",
  storageBucket: "e-commerce-mern-992a0.appspot.com",
  messagingSenderId: "889490544449",
  appId: "1:889490544449:web:b8fa45533dbb4758e6b3c0",
  measurementId: "G-K4W5MLGCCV"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };