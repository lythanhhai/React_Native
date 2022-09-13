import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DetailChat from "./screens/DetailChat/DetailChat";
import Home from "./screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "./screens/Register";
import Login from "./screens/Login";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"Register"} component={Register} />
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
