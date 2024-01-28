import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Modal,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const idUserUsed = "3354344";
const mensajes = [
  { id: "1", texto: "Hola, ¿cómo estás?", idUser: "25433445", imagen: null },
  {
    id: "2",
    texto: "Mira esta foto",
    idUser: "3354344",
    imagen:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
  },
  { id: "3", texto: "¡Qué bonito lugar!", idUser: "25433445", imagen: null },
  {
    id: "4",
    texto: null,
    idUser: "3354344",
    imagen:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
  },
  {
    id: "5",
    texto: "Nos vemos más tarde.",
    idUser: "25433445",
    imagen: null,
  },
  {
    id: "6",
    texto: "Esta es mi nueva mascota",
    idUser: "3354344",
    imagen:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
  },
  {
    id: "7",
    texto: "Estoy en una reunión, te llamo luego.",
    idUser: "25433445",
    imagen: null,
  },
  {
    id: "8",
    texto: null,
    idUser: "3354344",
    imagen:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
  },
  {
    id: "9",
    texto: "Mañana te lo envío.",
    idUser: "25433445",
    imagen: null,
  },
  { id: "10", texto: "¡Feliz cumpleaños!", idUser: "3354344", imagen: null },
];

export default function ChatScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState("");
  const { chatId, nameUser } = route.params;
  const isMessageReceived = (idUser) => {
    return idUser !== idUserUsed;
  };

  const sendMessage = () => {
    console.log(message);
    setMessage(""); 
  };

  const handleImagePress = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: nameUser,
      headerTitleStyle: { color: "blue" },
      headerStyle: { backgroundColor: "lightgray" },
      headerTintColor: "white",
      headerTitleAlign: "center",
      headerPressColorAndroid: "lightgray",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile", { userId: chatId })}
        >
          <Text style={{ color: "blue", marginRight: 10 }}>Perfil</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, nameUser]);


  return (
    <View style={styles.screen}>
      <FlatList
        data={mensajes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={
              isMessageReceived(item.idUser)
                ? styles.mssgRcvd
                : styles.mssgSnd
            }
          >
            {item.texto && (
              <Text style={styles.txtMssg}>{item.texto}</Text>
            )}
            {item.imagen && (
              <TouchableOpacity onPress={() => handleImagePress(item.imagen)}>
                <Image source={{ uri: item.imagen }} style={styles.imagen} />
              </TouchableOpacity>
            )}
          </View>
        )}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text>Close</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: selectedImage }}
            style={styles.fullScreenImage}
          />
        </View>
      </Modal>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Escribe un mensaje"
        />
        <Button title="Enviar" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  mssgRcvd: {
    alignSelf: "flex-start",
    backgroundColor: "#e1f5fe",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  mssgSnd: {
    alignSelf: "flex-end",
    backgroundColor: "#bbdefb",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  txtMssg: {
    color: "#000",
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 5,
  },
  fullScreenImage: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  closeButton: {
    position: "absolute",
    top: 30,
    right: 20,
    zIndex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginRight: 10,
    paddingLeft: 10,
  },
});
