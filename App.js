import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import Welcome from "./Component/Welcome";
import Signup from "./screens/Signup";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";

// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: true,
//       shouldSetBadge: trrue,
//   }),
// });

// import * as firebae from 'firebase'

// import SQLite from "react-native-sqlite-storage";

// const db = SQLite.openDatabase(
//     "./MainDB.db"
// );

import * as SQLite from "expo-sqlite";
// const db = SQLite.openDatabase("test.db");

function errorCB(err) {
  console.log("SQL Error: " + err);
}

function successCB() {
  console.log("SQL executed fine");
}

function openCB() {
  console.log("Database OPENED");
}

var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, openCB);
// const db = SQLite.openDatabase(
//   {
//     name: "test.db",
//     createFromLocation: "~MainDB.db",
//     location: "default",
//   },
//   () => console.log("success"),
//   () => console.log("faild"),
// );

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    // alignItems: 'center',
    justifyContent: "center",
  },
});

export default function App() {
  const names = ["Ryan", "Zen", "David"];

  const element = names.map((name, index) => {
    return <Welcome name={name} key={index} />;
  });

  useEffect(() => {
    createTable()
      .then()
      .catch((err) => console.log(err));
  }, []);

  const createTable = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS Users1 (ID INTEGER PRIMARY KEY NOT NULL, Email TEXT, Password TEXT, Name TEXT)",
          [],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  };


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// {/* <View style={styles.container}>
//         {/* <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" /> */}
//         {/* <Welcome name="Ryan" />
//       <Welcome name="Zen" />
//       <Welcome name="David" /> */}

//         {/* {element} */}

//         <Signup />
//       </View> */}

// top left

// center left

// bottom left

// top right

// center right

// bottom right

// https://bytemeta.vip/repo/andpor/react-native-sqlite-storage/issues/477
// https://stackoverflow.com/questions/42718973/run-avd-emulator-without-android-studio
// expo sqlite
// https://www.tabnine.com/code/javascript/modules/expo-sqlite
