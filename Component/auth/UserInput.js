import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  continer__form__input: {
    borderBottomWidth: 0.5,
    height: 36,
    borderBottomColor: "#000",
    marginBottom: 20,
  },
});

const UserInput = ({
  name,
  value,
  setValue,
  autoCapitalize,
  keyboardType,
  secureTextEntry,
}) => {
  const hanldeChange = (text) => {
    // alert(text);
    setValue(text);
  };
  return (
    <>
      <Text>{name}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.continer__form__input}
        value={value}
        onChangeText={(text) => {
          hanldeChange(text);
        }}
      />
    </>
  );
};

export default UserInput;
