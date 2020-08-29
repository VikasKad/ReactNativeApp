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
  Alert,
  Dimensions,
  Platform,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();
  const handlePress = () => {
    console.log("button pressed");
  };
  return (
    <SafeAreaView style={[containerStyle, styles.container]}>
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
      <Button
        title="Alert button"
        color="orange"
        onPress={() =>
          Alert.alert("My title", "My Message", [
            { text: "Yes", onPress: () => console.log("yes pressed ") },
            { text: "No", onPress: () => console.log("No pressed") },
          ])
        }
      />
      <Button
        title="Prompt button"
        style={containerStyle}
        onPress={() => {
          Alert.prompt("prompt title", "Prompt message", (text) => {
            console.log(text);
          });
        }}
      />
      <View
        style={{
          backgroundColor: "blue",
          width: "50%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}
const containerStyle = {
  flex: 1,
  // backgroundColor: "#fff",
  // alignItems: "center",
  // justifyContent: "center",
  // backgroundColor: "orange",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "orange",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
