import React from 'react';
import { View, Text,FlatList } from "react-native";
import ChatBoxList from "../components/ChatBoxList";
import { useNavigation } from '@react-navigation/native';
const chats = [
    { id: '1', nombre: 'Juan', ultimoMensaje: 'Hola, ¿cómo estás?', hora: '15:00' },
    { id: '2', nombre: 'María', ultimoMensaje: '¿Vamos al cine?', hora: '14:30' },
    { id: '3', nombre: 'Carlos', ultimoMensaje: 'Te envié el documento.', hora: '14:00' },
    { id: '4', nombre: 'Ana', ultimoMensaje: '¡Qué lindo día!', hora: '13:45' },
    { id: '5', nombre: 'Luis', ultimoMensaje: 'Nos vemos más tarde.', hora: '13:30' },
    { id: '6', nombre: 'Sofía', ultimoMensaje: '¿Recibiste mi mensaje?', hora: '12:15' },
    { id: '7', nombre: 'Jorge', ultimoMensaje: 'Estoy en una reunión, te llamo luego.', hora: '11:50' },
    { id: '8', nombre: 'Elena', ultimoMensaje: '¿Puedes ayudarme con la tarea?', hora: '11:30' },
    { id: '9', nombre: 'Pedro', ultimoMensaje: 'Mañana te lo envío.', hora: '10:20' },
    { id: '10', nombre: 'Daniela', ultimoMensaje: '¡Feliz cumpleaños!', hora: '09:45' }
];



export default function ChatListScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={chats}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ChatBoxList
                        nombre={item.nombre}
                        ultimoMensaje={item.ultimoMensaje}
                        hora={item.hora}
                        onPress={() => navigation.navigate("Chat", { chatId: item.id , nameUser: item.nombre })}
                    />
                )}
            />
        </View>
    );
    //hello
//hellov2
}
