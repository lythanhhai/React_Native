import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Styles";

const ChatItem = ({ item, navigation }) => {
  const { avatar, name, message, minute } = item;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Detail", { user: item });
        // console.warn("oke")
      }}
    >
      <View style={styles.content}>
        <Image source={avatar} style={styles.image} />
        <View style={styles.infor}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.message} numberOfLines={1}>
            {message}
          </Text>
        </View>
      </View>
      <Text style={styles.minute}>{minute}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ChatItem);
