import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Unread from "../components/Unread/Unread";
import ChatItem from "../components/ChatItem/ChatItem";
import ListChat from "../components/ListChat/ListChat";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  auth,
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
} from "../firebase/firebase";

const tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 60,
    height: "100%",
    backgroundColor: "rgb(243,243,243)",
  },
});

const ListFriend = ({ navigation, route }) => {
  return (
    <>
      <Header title="List Friend" pages={"Home"} />
      <View style={styles.container}>
        <ListChat navigation={navigation} route={route} list={true} />
      </View>
    </>
  );
};

export default React.memo(ListFriend);
