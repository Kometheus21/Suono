import React from "react";
import { StyleSheet } from "react-native";
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
      <NavigationContainer independent="true" style={styles.navCont}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="All" component={AllScreen} />
          <Tab.Screen name="Favourites" component={FavouriteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  navCont:{
    
  }

});

export default Navigation;
