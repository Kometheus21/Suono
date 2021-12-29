import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RoundButton from "../components/RoundButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tempHeader}>
        {/* In here goes logo, name of app and soon navigation */}
        <Text style={styles.heading}>This is all btns</Text>
      </View>
      <View style={styles.btnContainer}>
        <RoundButton color={"grey"} text={"First"} />
        <RoundButton color={"blue"} text={"Scnd"} />
        <RoundButton color={"purple"} text={"Third"} />
      </View>
      <View style={styles.btnContainer}>
        <RoundButton color={"pink"} text={"First"} />
        <RoundButton color={"#000"} text={"Scnd"} />
        <RoundButton color={"#000"} text={"Third"} />
      </View>
      <View style={styles.btnContainer}>
        <RoundButton color={"#000"} text={"First"} />
        <RoundButton color={"#000"} text={"Scnd"} />
        <RoundButton color={"#000"} text={"Third"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    width: "100%",
    flex: 1,
  },
  heading: {
    // marginTop: 175,
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
  },
  tempHeader: {
    // height: 200,
    backgroundColor: "pink",
  },
});

export default HomeScreen;
