import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  container__form: {
    marginHorizontal: 24,
  },
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
    <View style={styles.container__form}>
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
    </View>
  );
};

export default UserInput;
