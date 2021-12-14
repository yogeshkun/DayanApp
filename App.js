import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.textStyle}>Name of the Student :   DAYAN SHAIKH</Text>
          <Text style={styles.textStyle}>Roll No    :   MCA20192210</Text>
          <Text style={styles.textStyle}>Class      :     MCA</Text>
          <Text style={styles.textStyle}>Semester  :    V</Text>
          <Text style={styles.textStyle}>College Name        :          MCE Society’s
            Allana Institute of Management Sciences, Pune.

          </Text>
          <Text style={styles.textStyle, styles.bold}>MCA Department</Text>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
  },
  section: {
    backgroundColor: 'lightblue',
    marginBottom: 10,
    textAlign: "center",
    justifyContent: "center",
    padding: 10,


  },
  bold: {
    color: "#b00af2",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  }
});

export default App;