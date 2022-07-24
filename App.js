import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import Welcome from "./Component/Welcome";
import Signup from "./screens/Signup";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useEffect } from "react";

// const db = SQLite.openDatabase(
//     "./MainDB.db"
// );
// import SQLite, { openDatabase } from "react-native-sqlite-storage";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase(
  {
    name: "MainDB1.db",
    location: "default",
  },
  () => console.log("success"),
  () => console.log("faild"),
);


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
    createTable();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "Create table if not exists "
        +"Users "
        +"(ID INTERGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT, Password TEXT"
      )
    })
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
