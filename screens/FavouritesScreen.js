import React from "react";
import { View, FlatList, StyleSheet , Text} from "react-native";
import RoundButton from "../components/RoundButton";
import { favList } from "./AllScreen";
import { handlerPress } from "./AllScreen";

const FavouriteScreen = () => {
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
    />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    justifyContent:"center",
    alignItems:"center",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#392F5A",
    margin: 30,
  },
});

export default FavouriteScreen;
