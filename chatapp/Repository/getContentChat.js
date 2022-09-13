import {
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  get,
  child,
  onValue,
} from "../firebase/firebase";

const getNumberContent = (input_idChat) => {
  var count = 0;
  onValue(firebaseDatabaseRef(firebaseDatabase, "chats"), (snapshot) => {
    if (snapshot.exists()) {
      // debugger;
      let value = snapshot.val();

      for (let item in value) {
        if (item === input_idChat) {
          for (let id in value[item]) {
            // console.log(id)
            count++;
          }
          break;
        }
      }
    } else {
      console.log("No data available");
    }
  });
  return count;
};

export default getNumberContent;
