import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import Welcome from "./Component/Welcome";
import Signup from "./screens/Signup";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";

// import SQLite from "react-native-sqlite-storage";

// const db = SQLite.openDatabase(
//     "./MainDB.db"
// );

import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("test.db");
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
          "CREATE TABLE IF NOT EXISTS ccc (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT)",
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
