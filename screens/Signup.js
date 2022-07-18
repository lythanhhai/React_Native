import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import UserInput from "../Component/auth/UserInput";
import SubmitButton from "../Component/auth/SubmitButton";

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
  },
});

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up</Text>
      <View style={styles.container__form}>
        {/* <Text>Name</Text>
        <TextInput style={styles.continer__form__input}/> */}
        <UserInput
          name={"Name"}
          value={name}
          setValue={setName}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <UserInput
          name={"Email"}
          value={email}
          setValue={setEmail}
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <UserInput
          name={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          autoCompleteType="password"
        />
        {/* <Button title="Submit" onPress={() => {}}>Sign Up</Button> */}
        <SubmitButton />
        <Text>{JSON.stringify({ name, email, password })}</Text>
      </View>
    </View>
  );
};

export default Signup;
