import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./Styles";

const OwnMessage = (props) => {
  const { content, avatar } = props;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.frame}>
          <Text>{content}</Text>
        </View>
        <Image
          source={avatar}
          style={styles.image}
        />
      </View>
    </>
  );
};

export default React.memo(OwnMessage);
