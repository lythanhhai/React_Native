import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./Styles";

const OtherMessage = (props) => {
  const { content, avatar } = props;
  return (
    <>
      <View style={styles.container}>
        <Image
          source={avatar}
          style={styles.image}
        />
        <View style={styles.frame}>
          <Text>{content}</Text>
        </View>
      </View>
    </>
  );
};

export default React.memo(OtherMessage);
