import React, { useState, useCallback } from "react";
import { View, FlatList, StyleSheet, Text, RefreshControl } from "react-native";
import RoundButton from "../components/RoundButton";
import { favList } from "./AllScreen";
import { handlerPress } from "./AllScreen";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const FavouriteScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={styles.item}>
      <Text style={styles.heading}>Your selected favs</Text>
      <FlatList
        data={favList}
        numColumns={3}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-evenly" }}
        renderItem={({ item }) => (
          <RoundButton
            color={"#CC2936"}
            text={item.title}
            onPress={() => handlerPress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#392F5A",
    margin: 30,
  },
});

export default FavouriteScreen;
