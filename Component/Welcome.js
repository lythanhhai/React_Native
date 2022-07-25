import React from "react";
import { View, Text } from "react-native";

const Welcome = ({ name }) => {
  useEffect(() => {}, []);

  return (
    <View>
      <Text>hello, {name}</Text>
    </View>
  );
};

export default Welcome;
