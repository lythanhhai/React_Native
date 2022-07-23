import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./Component/Welcome";
import Signup from "./screens/Signup";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


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
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
        {/* <Welcome name="Ryan" />
      <Welcome name="Zen" />
      <Welcome name="David" /> */}

        {/* {element} */}

        {/* <Stack.Navigator>
          <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        </Stack.Navigator> */}

        <Stack.Navigator>
          <Stack.Screen name="Home" component={Welcome} />
        </Stack.Navigator> 
        <Signup />
      </View>
    </NavigationContainer>
  );
}

// top left

// center left

// bottom left

// top right

// center right

// bottom right

// https://stackoverflow.com/questions/42718973/run-avd-emulator-without-android-studio
