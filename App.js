import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Component/Welcome';

export default function App() {
  const names = ["Ryan", "Zen", "David"]
  const element = names.map((name, index) => {
    return(
      <Welcome name={name} key={index} />
    )
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <Welcome name="Ryan" />
      <Welcome name="Zen" />
      <Welcome name="David" /> */}
      
      {element}
      
    </View>
  );
}


// top left

// center left

// bottom left

// top right

// center right

// bottom right

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
