import React, { useState, useEffect } from "react";
import axios from "axios";
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
import CircleLogo from "../Component/auth/CircleLogo";
import { useNavigation } from "@react-navigation/native";
import PushNotification from "react-native-push-notification";

import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("test.db");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  container__form: {
    marginHorizontal: 25,
    // backgroundColor: "red"
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
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getPosts();
    // createChannels();
  });

  function getPosts() {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM Users1",
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        );
      });
    });
    promise
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  }

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    } else {
      setLoading(true);
    }
    try {
      // TODO
      const { data } = await axios.post("http://localhost:8000/api/signup", {
        name: name,
        email: email,
        password: password,
      });
      console.log("Sign in success => ", data);
      alert("Sign up success");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      // navigation.navigate("Home")
    }
  };

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: "test-channel",
      channelName: "Test Channel",
    });
  };

  return (
    <View style={styles.container}>
      {/* <CircleLogo /> */}
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

        {/* <Text style={{ marginHorizontal: "47%"}}>Or</Text>
        <Button title="Go to home" onPress={() => navigation.navigate("Home")}></Button>
        <Text>{JSON.stringify({ name, email, password })}</Text> */}
      </View>
      <SubmitButton handleSubmit={handleSubmit} loading={loading} email={email} password={password} name={name} />
    </View>
  );
};

export default Signup;
