import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SubmitButton = () => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        backgroundColor: "#ff9900",
        height: 50,
        justifyContent: "center",
        // alignItems: "center",
        marginLeft: 60,
        marginHorizontal: 10,
        borderRadius: 24,
        width: 250,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 300,
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        Sign Up
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
