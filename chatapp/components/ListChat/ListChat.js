import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./Styles";
import data from "../../constants/dataChat";
import ChatItem from "../ChatItem/ChatItem";
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
} from "../../firebase/firebase";

const ListChat = (props) => {
  const [listChat, setListChat] = useState([
    // {
    //   avatar: require("../../assets/images/image1.jpeg"),
    //   name: "Satoshi1",
    //   message: "OkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeee",
    //   minute: "5 min ago",
    // },
    // {
    //   avatar: require("../../assets/images/image2.jpg"),
    //   name: "Satoshi2",
    //   message: "Okeeee",
    //   minute: "5 min ago",
    // },
    // {
    //   avatar: require("../../assets/images/image3.jpeg"),
    //   name: "Satoshi3",
    //   message: "Okeeee",
    //   minute: "5 min ago",
    // },
    // {
    //   avatar: require("../../assets/images/image4.jpeg"),
    //   name: "Satoshi4",
    //   message: "Okeeee",
    //   minute: "5 min ago",
    // },
    // {
    //   avatar: require("../../assets/images/image5.png"),
    //   name: "Satoshi5",
    //   message: "Okeeee",
    //   minute: "5 min ago",
    // },
    // {
    //   avatar: require("../../assets/images/image1.jpeg"),
    //   name: "Satoshi6",
    //   message: "OkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeeeOkeeee",
    //   minute: "5 min ago",
    // },
    // {
    //   avatar: require("../../assets/images/image2.jpg"),
    //   name: "Satoshi7",
    //   message: "Okeeee",
    //   minute: "5 min ago",
    // },
    // {
    //   avatar: require("../../assets/images/image3.jpeg"),
    //   name: "Satoshi8",
    //   message: "Okeeee",
    //   minute: "5 min ago",
    // },
    // {
    //   avatar: require("../../assets/images/image4.jpeg"),
    //   name: "Satoshi",
    //   message: "Okeeee",
    //   minute: "5 min ago",
    // },
    // {
    //   avatar: require("../../assets/images/image5.png"),
    //   name: "Satoshi9",
    //   message: "Okeeee",
    //   minute: "5 min ago",
    // },
  ]);
  useEffect(() => {
    const dbRef = firebaseDatabaseRef(firebaseDatabase);
    onValue(firebaseDatabaseRef(firebaseDatabase, "users"), (snapshot) => {
      if (snapshot.exists()) {
        debugger;
        let value = snapshot.val();
        var newArray = [];
        // newArray = value.map((item, index) => {
        //   return {
        //     avatar: require("../../assets/images/image5.png"),
        //     name: "Satoshi9",
        //     message: "",
        //     minute: "5 min ago",
        //   };
        // });
        for (let item in value) {
          var random = (Math.floor(Math.random() * 5) + 1).toString();
          // console.log(value[item])
          if (props.route.params.user.uid === item) {
          } else {
            newArray.push({
              avatar: require(`../../assets/images/image3.jpeg`),
              name: value[item]["email"],
              message: "",
              minute: "5 min ago",
              email: value[item]["email"],
              accessToken: value[item]["accessToken"],
            });
          }
        }
        setListChat(newArray);
      } else {
        console.log("No data available");
      }
    });
    // get(child(dbRef, "users"))
    //   .then((snapshot) => {})
    //   .catch((err) => {
    //     console.log(`Cannot get users from firebase: ${err}`);
    //   });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={listChat}
        renderItem={({ item }) => {
          return <ChatItem item={item} navigation={props.navigation} />;
        }}
      />
    </View>
  );
};

export default React.memo(ListChat);
