import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Unread from "../../components/Unread/Unread";
import ChatItem from "../../components/ChatItem/ChatItem";
import ListChat from "../../components/ListChat/ListChat";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  auth,
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
} from "../../firebase/firebase";
import ChatHistory from "../ChatHistory";
import Icon from "react-native-vector-icons/FontAwesome";
import ListFriend from "../ListFriend";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 60,
    height: "100%",
    backgroundColor: "rgb(243,243,243)",
  },
});

const Home = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Friend"
        component={ListFriend}
        options={{
          tabBarIcon: () => <Icon name="list" size={24} />,
          tabBarShowLabel: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Chat"
        component={ChatHistory}
        options={{
          tabBarIcon: () => <Icon name="wechat" size={24} />,
          tabBarShowLabel: false,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default React.memo(Home);
