import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DetailChat from "./screens/DetailChat/DetailChat";
import Home from "./screens/Home/Home";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Home /> */}
      <DetailChat />
      <StatusBar style="auto" />
    </View>
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
