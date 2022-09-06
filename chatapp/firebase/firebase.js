import * as firebase from "firebase";
import {initializeApp} from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase } from "firebase/database"

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

export { auth, firebaseDatabase }