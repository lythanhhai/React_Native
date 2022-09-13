import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Styles";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Unread = (props) => {
  const { numberMessage } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{numberMessage} Message Unread</Text>
      <EvilIcons
        style={styles.icon_trash}
        name="trash"
        size={22}
        color="black"
      />
    </View>
  );
};

export default React.memo(Unread);
