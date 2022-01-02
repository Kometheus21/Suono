import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import { Audio } from "expo-av";
import RoundButton from "../components/RoundButton";
export async function handlerPress(id) {
  const sndObj = new Audio.Sound();
  try {
    let src = sounds[id];
    await sndObj.loadAsync(src);
    await sndObj.playAsync().then(async (playbackStatus) => {
      setTimeout(() => {
        sndObj.unloadAsync();
      }, playbackStatus.playableDurationMillis);
    });
  } catch (error) {
    console.log(error);
  }
}
const sounds = [
  require("../assets/s1.wav"),
  require("../assets/s2.wav"),
  require("../assets/s3.wav"),
  require("../assets/s4.wav"),
  require("../assets/s5.wav"),
  require("../assets/s6.wav"),
  require("../assets/s7.wav"),
  require("../assets/s8.wav"),
  require("../assets/s9.wav"),
];
const data = [
  {
    id: "0",
    title: "Please",
  },
  {
    id: "1",
    title: "be",
  },
  {
    id: "2",
    title: "careful",
  },
  {
    id: "3",
    title: "when",
  },
  {
    id: "4",
    title: "you",
  },
  {
    id: "5",
    title: "are",
  },
  {
    id: "6",
    title: "playing",
  },
  {
    id: "7",
    title: "with",
  },
  {
    id: "8",
    title: "fire!",
  },
];

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};
let favouritesList = [];
const AllScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState();
  const [favoriteList, setFavoriteList] = useState([]);
  const addToFav = (item) => {
    setFavoriteList([...favoriteList, item]);
    favouritesList = { favoriteList };
    
  };

  const onRemoveFavorite = (btn) => {
    const filteredList = favoriteList.filter((item) => item.id !== btn.id);
    setFavoriteList(filteredList);
  };
  const ifExists = (btn) => {
    if (favoriteList.filter((item) => item.id === btn.id).length > 0) {
      return true;
    }
    return false;
  };
  function handlerLongPress(itemId) {
    //on longpress open modal
    setModalVisible(true);
    setId(itemId);
  }

  

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            {/* here goes modal functionality */}
            <Pressable style={styles.addToFavBtn}>
              <Text
                style={styles.modalText}
                onPress={() =>
                  ifExists(data[id])
                    ? onRemoveFavorite(data[id])
                    : addToFav(data[id])
                }
              >
                add to favourites
              </Text>
            </Pressable>
            <Text style={styles.modalText}>-------------------------</Text>
            <Pressable
              style={styles.closeBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalText}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.heading}>Choose Your Favourite!</Text>
      <FlatList
        data={data}
        numColumns={3}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-evenly" }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <RoundButton
              color={generateColor()}
              text={item.title}
              onPress={() => handlerPress(item.id)}
              longPress={() => handlerLongPress(item.id)}
              styles={styles.item}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export let expFav = favouritesList;
const styles = StyleSheet.create({
  btnContainer: {},
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    margin: 30,
    textAlign: "center",
    fontWeight: "700",
    color: "#392F5A",
  },
  item: {},
  modal: {
    height: 100,
    width: "75%",
    backgroundColor: "#F092DD",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: "#fff",
    fontSize: 16,
  },
  closeBtn: {},
  addToFavBtn: {},
});

export default AllScreen;
