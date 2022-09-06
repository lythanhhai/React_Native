import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DetailChat from "./screens/DetailChat/DetailChat";
import Home from "./screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Detail"} component={DetailChat} />
      </Stack.Navigator>
      {/* <StatusBar /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// https://icons.expo.fyi/ website for icon in react native
