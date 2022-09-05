import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./Styles";

const OtherMessage = (props) => {
    const {content} = props
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../../assets/images/image2.jpg")} style={styles.image}/>
        <View style={styles.frame}>
          <Text>{content}</Text>
        </View>
      </View>
    </>
  );
};

export default React.memo(OtherMessage);
