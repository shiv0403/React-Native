import React from "react";
import { StyleSheet, Text, View } from "react-native";

function DisplayLove({ percent, status }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Percent is {percent}</Text>
      <Text style={styles.text}>Status is: {status}</Text>
    </View>
  );
}

export default DisplayLove;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
