import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function UserScreen({ route }) {
    const { userId } = route.params;

    const userData = {
        name: "Nombre del Usuario",
        email: "usuario@example.com",
        profilePic: "https://via.placeholder.com/150",
        bio: "Esta es una breve biografía del usuario. Aquí puede ir información sobre sus intereses, trabajo, educación, etc."
      
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: userData.profilePic }} style={styles.profilePic} />
            <Text style={styles.name}>{userData.name}</Text>
            <Text style={styles.detail}>Email: {userData.email}</Text>
            <Text style={styles.detail}>Biografía: {userData.bio}</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    detail: {
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 10,
    },

});
