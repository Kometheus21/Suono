import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.cont}>
      <Text>Hello, from G2</Text>
      <Text>
        This app is a result of hard work and sweat and brain pain. Hope You
        enjoy playing with this, because we ain't having fun no more. Jokes
        aside: play the sounds and just appreciate the interface, with the
        materials, we have provided this is excellent work of Youtube teachers
        and long scrolls through StackOverFlow. :)
      </Text>
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

export default HomeScreen;
