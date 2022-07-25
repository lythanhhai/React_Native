import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SubmitButton = ({ handleSubmit, loading }) => {
  return (
    <View
      style={{
        backgroundColor: "#ff9900",
        height: 50,
        width: 250,
        borderRadius: 24,
        // flex: 1,
        // justifyContent: "center",
        marginLeft: 30,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          // console.log("a");
        }}
        style={{
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
          borderRadius: 24,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "300",
            textAlign: "center",
            marginTop: 10
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;
