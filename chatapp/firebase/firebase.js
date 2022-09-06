// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// // import * as firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyB9-34BmHG4zsO7MlNLUbYO1R59Qy7wSLI",
//   authDomain: "chatapp2022-79067.firebaseapp.com",
//   databaseURL: "https://chatapp2022-79067-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "chatapp2022-79067",
//   storageBucket: "chatapp2022-79067.appspot.com",
//   messagingSenderId: "240380152200",
//   appId: "1:240380152200:android:701976ec10ce99831e123d",
// };

// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig)
// } else {
//   app = firebase.app();
// }

// const auth = firebase.auth()
// const firebaseDatabase = app.firestore()

// export { auth, firebaseDatabase }

import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,   
    signInWithEmailAndPassword,
    sendEmailVerification,  
    //read data from Firebase    
} from "firebase/auth"
//ref = reference to a "collection"
import { 
    getDatabase, 
    ref as firebaseDatabaseRef, 
    set as firebaseSet,
    child,
    get,
    onValue,
} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyB9-34BmHG4zsO7MlNLUbYO1R59Qy7wSLI",
  authDomain: "chatapp2022-79067.firebaseapp.com",
  databaseURL: "https://chatapp2022-79067-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatapp2022-79067",
  storageBucket: "chatapp2022-79067.appspot.com",
  messagingSenderId: "240380152200",
  appId: "1:240380152200:android:701976ec10ce99831e123d",
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()
export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseSet,
    firebaseDatabaseRef,
    sendEmailVerification,
    child,
    get,
    onValue, //reload when online DB changed
    signInWithEmailAndPassword,
}
