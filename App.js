import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View
        style = {{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#000",
            flex: 10,
          }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            flex: 1,
          }}
        /> 
        <View
          style ={{
            backgroundColor: "gold",
            flex: 1,
            top : 100,
            right: 155,
            width: 100,
            height: 100,
            position: "absolute",
          }}
        />
        <View
          style={{
            backgroundColor: "dodgerblue",
            flex: 1,
          }}
        />
      </View>

      {/* <View 
        style = {{
          backgroundColor: "#000",
          flex: 1,
        }}
      >
        <View
          style = {{
            backgroundColor: "#000",
            flex: 1,
            flexDirection: "row",
            justifyContent:"space-between",
          }}
        >
          <View
            style={{
              backgroundColor: "tomato",
              width: 50,
              height: 50,
              left: 30,
            }}
          />
          <View
            style={{
              backgroundColor: "dodgerblue",
              width: 50,
              height: 50,
              right: 30,
            }}
          />

        </View>
        <View
          style={{
            backgroundColor: "gold",
            flex: 5,
          }}
        />
        <View
          style={{
            backgroundColor: "#000",
            flex: 1,
          }}
        />
            
      </View> */}
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
