import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AllScreen = () => {
  return (
    <View style={styles.cont}>
      <Text>This is the screen for home info</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AllScreen;
