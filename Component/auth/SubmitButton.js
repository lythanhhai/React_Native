import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import PushNotification from "react-native-push-notification";


import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("test.db");



const styles = StyleSheet.create({
  button: {
    transform: [{ translateX: 74 }],
    backgroundColor: "#ff9900",
    height: 50,
    width: 250,
    borderRadius: 24,
  },
  text: {
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 10,
  },
});

const SubmitButton = ({ handleSubmit, loading, email, password, name }) => {
  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: "test-channel",
      title: "You clicked on " + "Notification",
      message: "OK",
    });
  };

  const addExpense = (email, password, name) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO Users (Email, Password, Name) VALUES (?, ?, ?);`,
          [email, password, name],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          // handleSubmit();
          // handleNotification();
          // addExpense(email, password, name)
          //   .then((res) => console.log(res))
          //   .catch((err) => console.log(err));
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

export default SubmitButton;
