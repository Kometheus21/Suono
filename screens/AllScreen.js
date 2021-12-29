import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import RoundButton from "../components/RoundButton";

const data = [
  {
    id: "1",
    title: "First Sound",
  },
  {
    id: "2",
    title: "Second Sound",
  },
  {
    id: "3",
    title: "Third Sound",
  },
  {
    id: "4",
    title: "Fourth Sound",
  },
  {
    id: "5",
    title: "Fifth Sound",
  },
  {
    id: "6",
    title: "Sixth Sound",
  },
  {
    id: "7",
    title: "Seventh Sound",
  },
  {
    id: "8",
    title: "Eighth Sound",
  },
  {
    id: "9",
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
  const handlerPress = () => {
    //on press play the sound
    alert("Button Pressed " + generateColor());
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
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
        columnWrapperStyle={{ flex: 1, justifyContent: "space-evenly"}}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <RoundButton
              color={generateColor()}
              text={item.title}
              onPress={handlerPress}
              longPress={handlerLongPress}
              styles={styles.item}
            />
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
    margin:30,
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
  },
  modalText: {
    color: "#fff",
    fontSize: 16,
  },
  closeBtn: {},
  addToFavBtn: {},
});

export default AllScreen;
