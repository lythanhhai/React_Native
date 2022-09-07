import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./Styles";

const OwnMessage = (props) => {
  const { content, avatar, isShower } = props;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.frame}>
          <Text>{content}</Text>
        </View>
        {isShower ? (
          <Image source={avatar} style={styles.image} />
        ) : (
          <Image source={avatar} style={styles.imageHide} />
        )}
      </View>
    </>
  );
};

export default React.memo(OwnMessage);
