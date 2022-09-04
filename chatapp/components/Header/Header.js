import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Styles";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.icon_back}
        name="chevron-back"
        size={20}
        color="black"
      />
      <Text style={styles.title}>{title}</Text>
      <EvilIcons
        style={styles.icon_search}
        name="search"
        size={20}
        color="black"
      />
    </View>
  );
};

export default React.memo(Header);
