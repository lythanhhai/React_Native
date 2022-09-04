import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";

const ChatItem = (props) => {
  const { avatar, name, message, minute } = props.item;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={avatar} style={styles.image}/>
        <View style={styles.infor}>
          <Text style={styles.name} numberOfLines={1}>{name}</Text>
          <Text style={styles.message} numberOfLines={1}>{message}</Text>
        </View>
      </View>
      <Text style={styles.minute}>{minute}</Text>
    </View>
  );
};

export default React.memo(ChatItem);
