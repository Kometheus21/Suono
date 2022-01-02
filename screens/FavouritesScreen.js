import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import RoundButton from "../components/RoundButton";
import { expFav } from "./AllScreen";
import { handlerPress } from "./AllScreen";

const FavouriteScreen = () => {
  return (
    <FlatList
      data={expFav}
      numColumns={3}
      columnWrapperStyle={{ flex: 1, justifyContent: "space-evenly" }}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <RoundButton
            color={"#CC2936"}
            text={item.title}
            onPress={() => handlerPress(item.id)}
            styles={styles.item}
          />
          <Text>I got in list</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
const styles = StyleSheet.create({
  item: {},
});

export default FavouriteScreen;
