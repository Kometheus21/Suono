import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RoundButton from "../components/RoundButton";

const HomeScreen = () => {
  const handlerLongPress = () => {
    //on longpress open modal
    alert('Button Long Pressed');
  };
  const handlerPress = () => {
    //on press play the sound
    alert('Button Pressed');
  };
  return (
    <View style={styles.container}>
      <View style={styles.tempHeader}>
        {/* In here goes logo, name of app and soon navigation */}
        <Text style={styles.heading}>Choose Your favourite!</Text>
      </View>
      <View style={styles.btnContainer}>
        <RoundButton color={"grey"} text={"First"} onPress={handlerPress} longPress={handlerLongPress}/>
        <RoundButton color={"blue"} text={"Scnd"} onPress={handlerPress} longPress={handlerLongPress}/>
        <RoundButton color={"purple"} text={"Third"} onPress={handlerPress} longPress={handlerLongPress}/>
      </View>
      <View style={styles.btnContainer}>
        <RoundButton color={"pink"} text={"First"} onPress={handlerPress} longPress={handlerLongPress}/>
        <RoundButton color={"purple"} text={"Scnd"} onPress={handlerPress} longPress={handlerLongPress}/>
        <RoundButton color={"green"} text={"Third"} longPress={handlerLongPress}/>
      </View>
      <View style={styles.btnContainer}>
        <RoundButton color={"lightgreen"} text={"First"} onPress={handlerPress} longPress={handlerLongPress}/>
        <RoundButton color={"yellow"} text={"Scnd"} onPress={handlerPress} longPress={handlerLongPress}/>
        <RoundButton color={"lightblue"} text={"Third"} onPress={handlerPress} longPress={handlerLongPress}/>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    // marginTop: 175,
    textAlign: "center",
    fontWeight: "700",
    color: "grey",
  },
  tempHeader: {
    
  },
});

export default HomeScreen;
