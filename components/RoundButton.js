import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const RoundButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onPress}
        onLongPress={props.longPress}
        style={{
          shadowColor: "rgba(0,0,0, .9)",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 2,
          backgroundColor: props.color,
          borderRadius: 100,
          padding: 30,
          justifyContent: "center",
          height: 50,
          width: 50,
        }}
      />
      <Text style={styles.btnText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 5,
  },
  btnText: {
    color: "#392F5A",
    margin: 10,
    textAlign: "center",
  },
});

export default RoundButton;
