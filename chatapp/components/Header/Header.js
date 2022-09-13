import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Styles";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";

const Header = ({ title, pages, navigation }) => {
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <View style={styles.container}>
        {pages === "Home" ? (
          <Ionicons
            style={styles.icon_back}
            name="chevron-back"
            size={24}
            color="black"
            onPress={() => {}}
          />
        ) : (
          <Ionicons
            style={styles.icon_back}
            name="chevron-back"
            size={24}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
        <Text style={styles.title}>{title}</Text>
        {pages === "Home" ? (
          <EvilIcons
            style={styles.icon_search}
            name="search"
            size={24}
            color="black"
            onPress={() => {}}
          />
        ) : (
          <EvilIcons
            style={styles.icon_search}
            name="search"
            size={24}
            color="black"
            onPress={() => {}}
          />
        )}
      </View>
    </View>
  );
};

export default React.memo(Header);
