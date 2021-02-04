import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  Alert, 
  Button, 
  StatusBar, 
  Platform 
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container,containerStyle}>
      <Button
        color="green"
        title="Hire Esther!!"
        onPress={() => 
          Alert.alert("Shopify", "I am ready", [
            {text: "Yes", onPress: () => console.log("Yes")},
            {text: "Hired", onPress: () => console.log("Hired")}
          ])
          // Alert.prompt("My title", "My Message",(text => console.log(text)))
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
