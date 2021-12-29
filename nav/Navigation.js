import React from "react";
import { StyleSheet, Image } from "react-native";
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
      <NavigationContainer independent="true">
        <Tab.Navigator
          style={styles.navCont}
          screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarLabelStyle: { color: "white", fontWeight: "bold" },
            tabBarInactiveTintColor: "grey",
            tabBarContentContainerStyle: {
              backgroundColor: "pink",
            },
            tabBarIndicatorStyle: {
              borderBottomColor: "black",
              borderBottomWidth: 2,
            },
          }}
        >
          {/* <Image source={require("../assets/logo.png")} /> */}
          <Tab.Screen name="Home" component={HomeScreen} style={styles.tab} />
          <Tab.Screen
            name="All"
            component={AllScreen}
            style={styles.tab}
            
          />
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
    paddingTop: 50,
    backgroundColor: "pink",
  },
  tab: {
    color: "pink",
  },
});

export default Navigation;
