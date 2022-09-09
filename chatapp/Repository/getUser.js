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

const getUserById = (input_id) => {
  var user = {};
  onValue(firebaseDatabaseRef(firebaseDatabase, "users"), (snapshot) => {
    if (snapshot.exists()) {
      debugger;
      let value = snapshot.val();

      for (let item in value) {
        if (item === input_id) {
          user = {
            userId: item,
            name: value[item]["email"],
            email: value[item]["email"],
          };
          break;
        }
      }
    } else {
      console.log("No data available");
    }
  });
  if (user) {
    return user
  } else {
    return {}
  }
};

export default getUserById;
