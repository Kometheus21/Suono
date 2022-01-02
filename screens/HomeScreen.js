import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.heading}>Hello, from G2</Text>
      <Text style={styles.text}>
        This app is a result of hard work and sweat and brain pain. Hope You
        enjoy playing with this, because we ain't having fun no more.
      </Text>

      <Text style={styles.text}>
        Jokes aside: play the sounds and just appreciate the interface, the
        materials we had been provided with were not nearly enough, so this is
        excellent work of Youtube teachers and long scrolls through
        StackOverFlow. :)
      </Text>
      <Image source={require("../assets/shrek.png")} style={styles.img} />
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#392F5A",
    fontSize: 14,
    margin: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#392F5A",
    margin: 30,
  },
  img: {
    borderRadius: 100,
    width: 150,
    height: 150,
    borderWidth:4,
    borderColor:"#F092DD"
  },
});

export default HomeScreen;
