
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChatBoxList = ({ nombre, ultimoMensaje, hora, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.circle} />
                <View style={styles.chatDetails}>
                    <Text style={styles.chatName}>{nombre}</Text>
                    <Text style={styles.chatMessage}>{ultimoMensaje}</Text>
                </View>
            </View>
            <Text style={styles.chatTime}>{hora}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#007bff',
        marginRight: 10
    },
    chatDetails: {
        justifyContent: 'center'
    },
    chatName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    chatMessage: {
        fontSize: 14,
        color: 'gray'
    },
    chatTime: {
        fontSize: 12,
        color: 'blue'
    }
});

export default ChatBoxList;
