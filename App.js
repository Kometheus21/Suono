import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Image, View } from "react-native";
import Navigation from "./nav/Navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
  logo: {
    height: 50,
    width: "auto",
  },
});
