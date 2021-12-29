import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const RoundButton = ({ color, text, onclick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onclick}
        style={{
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

const styles = 
  StyleSheet.create({
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
