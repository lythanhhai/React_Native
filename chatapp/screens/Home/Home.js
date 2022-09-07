import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Unread from "../../components/Unread/Unread";
import ChatItem from "../../components/ChatItem/ChatItem";
import ListChat from "../../components/ListChat/ListChat";
import { View, StyleSheet } from "react-native";

import {
  auth, onAuthStateChanged, firebaseDatabaseRef, firebaseSet, firebaseDatabase
}
from "../../firebase/firebase"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 60,
    height: "100%",
    backgroundColor: "rgb(243,243,243)",
  },
});

const Home = ({ navigation }) => {
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if(user)
  //     {
  //       const userId = user.uid
  //       firebaseSet(firebaseDatabaseRef(
  //         firebaseDatabase,
  //         `users/${userId}`
  //       ), {
  //         email: user.email,
  //         emailVerified: user.emailVerified,
  //         accessToken: user.accessToken,
  //       })
        
  //     }
  //   })
  // })
  return (
    <>
      <Header title="Notification" pages={"Home"} />
      <View style={styles.container}>
        <Unread numberMessage={5} />
        <ListChat navigation={navigation} />
      </View>
    </>
  );
};

export default React.memo(Home);
