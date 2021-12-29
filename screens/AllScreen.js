import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import RoundButton from "../components/RoundButton";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handlerLongPress = () => {
    //on longpress open modal
    setModalVisible(true);
  };
  const handlerPress = () => {
    //on press play the sound
    alert("Button Pressed");
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

      <View>
        {/* In here goes logo, name of app and soon navigation */}
        <Text style={styles.heading}>Choose Your favourite!</Text>
      </View>
      <View style={styles.btnContainer}>
        <RoundButton
          color={"grey"}
          text={"First"}
          onPress={handlerPress}
          longPress={handlerLongPress}
        />
        <RoundButton
          color={"blue"}
          text={"Scnd"}
          onPress={handlerPress}
          longPress={handlerLongPress}
        />
        <RoundButton
          color={"purple"}
          text={"Third"}
          onPress={handlerPress}
          longPress={handlerLongPress}
        />
      </View>
      <View style={styles.btnContainer}>
        <RoundButton
          color={"pink"}
          text={"First"}
          onPress={handlerPress}
          longPress={handlerLongPress}
        />
        <RoundButton
          color={"purple"}
          text={"Scnd"}
          onPress={handlerPress}
          longPress={handlerLongPress}
        />
        <RoundButton
          color={"green"}
          text={"Third"}
          longPress={handlerLongPress}
        />
      </View>
      <View style={styles.btnContainer}>
        <RoundButton
          color={"lightgreen"}
          text={"First"}
          onPress={handlerPress}
          longPress={handlerLongPress}
        />
        <RoundButton
          color={"yellow"}
          text={"Scnd"}
          onPress={handlerPress}
          longPress={handlerLongPress}
        />
        <RoundButton
          color={"lightblue"}
          text={"Third"}
          onPress={handlerPress}
          longPress={handlerLongPress}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    // marginTop: 175,
    textAlign: "center",
    fontWeight: "700",
    color: "grey",
  },
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
  },
  closeBtn: {},
  addToFavBtn: {},
});

export default HomeScreen;
