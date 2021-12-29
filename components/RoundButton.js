import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const RoundButton = ({ color, text, onclick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onclick}
        style={{
          shadowColor: "rgba(0,0,0, .9)",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 2,
          backgroundColor: color,
          borderRadius: 100,
          padding: 30,
          justifyContent: "center",
          height: 50,
          width: 50,
        }}
      />
      <Text style={styles.btnText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 30,
  },
  btnText: {
    color: "grey",
    margin: 10,
  },
});

export default RoundButton;
