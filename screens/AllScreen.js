import React, { useState, useEffect } from "react";
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
    title: "First Sound",
  },
  {
    id: "1",
    title: "Second Sound",
  },
  {
    id: "2",
    title: "Third Sound",
  },
  {
    id: "3",
    title: "Fourth Sound",
  },
  {
    id: "4",
    title: "Fifth Sound",
  },
  {
    id: "5",
    title: "Sixth Sound",
  },
  {
    id: "6",
    title: "Seventh Sound",
  },
  {
    id: "7",
    title: "Eighth Sound",
  },
  {
    id: "8",
    title: "Ninth Sound",
  },
];

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};

const AllScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handlerLongPress = () => {
    //on longpress open modal
    setModalVisible(true);
  };
  const [sound, setSound] = useState();
  async function handlerPress(id) {
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

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

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
              <Text style={styles.modalText}>add to favourites</Text>
            </Pressable>
            <Text style={styles.modalText}>-------------------------</Text>
            <Pressable
              style={styles.closeBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalText}> close</Text>
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
              longPress={handlerLongPress}
              styles={styles.item}
            ></RoundButton>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
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
    color: "grey",
  },
  item: {},
  modal: {
    height: 100,
    width: "75%",
    backgroundColor: "pink",
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
