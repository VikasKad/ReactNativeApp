import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("button pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello, this is longer size text to check what happens when we add long
        text !
      </Text>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image
          source={require("./assets/icon.png")}
          style={{ width: 100, height: 100 }}
        />
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            width: 100,
            height: 100,
            blurRadius: 10,
            uri: "https://picsum.photos/200",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Button title="click me" color="orange" />
    </SafeAreaView>
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
