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
<<<<<<< HEAD
import CircleLogo from '../Component/auth/CircleLogo'
=======
import { useNavigation } from "@react-navigation/native";
>>>>>>> 1832df8c3538b62718e1ff0126f122aee38f452f

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  container__form: {
    marginHorizontal: 25,
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
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);

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
      setLoading(false)
    }
  };

=======
  const [loading, setLoading] = useState("");
  const navigation = useNavigation();
>>>>>>> 1832df8c3538b62718e1ff0126f122aee38f452f
  return (
    <View style={styles.container}>
      <CircleLogo />
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
<<<<<<< HEAD
        <SubmitButton handleSubmit={handleSubmit} loading={loading} />
=======
        <SubmitButton />
        <Text style={{ marginHorizontal: "47%"}}>Or</Text>
        <Button title="Go to home" onPress={() => navigation.navigate("Home")}></Button>
>>>>>>> 1832df8c3538b62718e1ff0126f122aee38f452f
        <Text>{JSON.stringify({ name, email, password })}</Text>
      </View>
    </View>
  );
};

export default Signup;
