import React from "react";
import { View, Text } from "react-native";

const Welcome = ({ name }) => {
  return (
    <View>
      <Text>hello, {name}</Text>
    </View>
  );
};

export default Welcome;
