import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllScreen from "../screens/AllScreen";
import FavouriteScreen from "../screens/FavouritesScreen";
import HomeScreen from "../screens/HomeScreen";

const Navigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.imgCont}>
        <Image source={require("../assets/logo.png")} style={styles.img} />
        <Text style={styles.heading}>SUONO</Text>
      </View>
      <NavigationContainer a independent="true">
        <Tab.Navigator
          style={styles.navCont}
          screenOptions={{
            tabBarActiveTintColor: "#392F5A",
            tabBarContentContainerStyle: {
              backgroundColor: "pink",
            },
            tabBarIndicatorStyle:{
              backgroundColor:"purple"
            }
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} style={styles.tab} />
          <Tab.Screen name="All" component={AllScreen} style={styles.tab} />
          <Tab.Screen
            name="Favourites"
            component={FavouriteScreen}
            style={styles.tab}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  navCont: {
    backgroundColor: "pink",
  },
  tab: {
    color: "pink",
  },
  img: {
    height: 40,
    width: 80,
    marginBottom: 5,
    marginTop: 10,
  },
  imgCont: {
    backgroundColor: "pink",
    alignItems: "center",
  },
  heading: {
    marginBottom: 10,
    fontSize: 14,
    textAlign: "center",
    color: "#D3F8E2",
    fontWeight: "bold",
    borderColor: "#D3F8E2",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
});

export default Navigation;
