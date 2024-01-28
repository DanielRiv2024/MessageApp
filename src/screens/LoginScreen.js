import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const iniciarSesion = () => {
        navigation.navigate("Menu");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.hdr}>Iniciar Sesión</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Usuario" 
                onChangeText={setUsuario} 
                value={usuario}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Contraseña" 
                onChangeText={setContrasena} 
                value={contrasena} 
                secureTextEntry
            />

            <TouchableOpacity onPress={iniciarSesion} style={styles.btn}>
                <Text style={styles.txtbtn}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    hdr: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    btn: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    txtbtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
