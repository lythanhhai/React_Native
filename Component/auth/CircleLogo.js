import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const CircleLogo = () => {
  return (
    <View style={{ justifyContent: "center", alignItem: "center" }}>
      <Image source={require("../../assets/favicon.png")} style={{ width: 50, height: 50, objectFit: "cover", marginVertical: 50}}>

      </Image>
    </View>
  );
};

export default CircleLogo;
