import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllScreen from "../screens/AllScreen";
import FavouriteScreen from "../screens/FavouritesScreen";
import HomeScreen from "../screens/HomeScreen";

const Navigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer independent="true">
      <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Favourites" component={FavouriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
