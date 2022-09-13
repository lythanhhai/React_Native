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
import AsyncStorage from "@react-native-async-storage/async-storage";
import getUserById from "../../Repository/getUser";
import getNumberContent from "../../Repository/getContentChat";

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
  const checkExistsUser = (array, email) => {
    var count = 0;
    var object = {
      lastContentz: "",
      timestamp: 0,
      count: false,
    };
    array.forEach((item, index) => {
      if (item.email === email) {
        object = {
          lastContentz: item.message,
          timestamp: item.timestamp,
          count: true,
          index: count,
        };
      }
      count++;
    });
    return object;
  };
  useEffect(() => {
    const dbRef = firebaseDatabaseRef(firebaseDatabase);
    if (props.list) {
      onValue(
        firebaseDatabaseRef(firebaseDatabase, "users"),
        async (snapshot) => {
          if (snapshot.exists()) {
            debugger;
            const res = await AsyncStorage.getItem("user");
            const currentUser = JSON.parse(res);
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
              if (currentUser.uid === item) {
              } else {
                newArray.push({
                  avatar: require(`../../assets/images/image3.jpeg`),
                  name: value[item]["email"],
                  message: "",
                  minute: "",
                  email: value[item]["email"],
                  accessToken: value[item]["accessToken"],
                });
              }
            }
            setListChat(newArray);
          } else {
            console.log("No data available");
          }
        }
      );
    } else {
      onValue(
        firebaseDatabaseRef(firebaseDatabase, "chats"),
        async (snapshot) => {
          if (snapshot.exists()) {
            let res = await AsyncStorage.getItem("user");
            let myId = JSON.parse(res).uid;
            let value = snapshot.val();

            var newArray = [];
            for (let item in value) {
              let isSender = 1;
              if (myId === item.split("-")[1]) {
                isSender = 0;
              }
              let receiverId = item.split("-")[isSender];
              let receiverUser = getUserById(receiverId);
              let idChatCurrent = getNumberContent(item).toString();
              // console.log(receiverUser)

              if (
                item.includes(myId)
                // &&
                // !checkExistsUser(newArray, receiverUser.email).count
              ) {
                // console.log(
                //   "oke: " + value[item][idChatCurrent]["content"]
                // );
                if (
                  checkExistsUser(newArray, receiverUser.email).count &&
                  checkExistsUser(newArray, receiverUser.email).timestamp <
                    value[item][idChatCurrent]["timestamp"]
                ) {
                  // console.log("hsdufh")
                  const newObject = {
                    avatar: require(`../../assets/images/image3.jpeg`),
                    name: receiverUser.name,
                    message: value[item][idChatCurrent]["content"],
                    minute: "5 min ago",
                    email: receiverUser.email,
                    timestamp: value[item][idChatCurrent]["timestamp"],
                  };
                  console.log(newArray);
                  newArray[
                    checkExistsUser(newArray, receiverUser.email).index
                  ] = newObject;
                  console.log(newArray);
                  // newArray = newArray.map((item, index) => {
                  //   if (
                  //     index ===
                  //     checkExistsUser(newArray, receiverUser.email).index
                  //   ) {
                  //     return {
                  //       avatar: require(`../../assets/images/image3.jpeg`),
                  //       name: receiverUser.name,
                  //       message: value[item][idChatCurrent]["content"],
                  //       minute: "5 min ago",
                  //       email: receiverUser.email,
                  //       timestamp: value[item][idChatCurrent]["timestamp"],
                  //     };
                  //   }
                  //   else{
                  //     return item
                  //   }
                  // });
                } else {
                  // console.log("hsdufh11111")
                  newArray.push({
                    avatar: require(`../../assets/images/image3.jpeg`),
                    name: receiverUser.name,
                    message: value[item][idChatCurrent]["content"],
                    minute: "5 min ago",
                    email: receiverUser.email,
                    timestamp: value[item][idChatCurrent]["timestamp"],
                    // accessToken: value[item]["accessToken"],
                  });
                }
              }
            }
            // console.log(newArray)

            setListChat(newArray);
            // console.log(value);
          } else {
            console.log("No data available");
          }
        }
      );
    }

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
