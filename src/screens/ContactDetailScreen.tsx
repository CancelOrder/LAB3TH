import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../navigation/StackParamList'; // Ensure StackParamList is correctly imported

// Define the props for the ContactDetailScreen
type ContactDetailScreenProps = {
    route: RouteProp<StackParamList, 'ContactDetail'>; // Use RouteProp to type the route params
};

const ContactDetailScreen: React.FC<ContactDetailScreenProps> = ({ route }) => {
    const { contact } = route.params;
    const fullName = `${contact.name.first} ${contact.name.last}`;

    return (
        <View style={styles.container}>
            <Image source={{ uri: contact.picture }} style={styles.image} />
            <Text style={styles.name}>{fullName}</Text>
            <Text style={styles.phone}>Phone: {contact.phone}</Text>
            <Text style={styles.email}>Email: {contact.email}</Text>
            <Text style={styles.location}>
                Location: {contact.location.city}, {contact.location.state}, {contact.location.country}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    phone: {
        fontSize: 18,
        marginBottom: 5,
    },
    email: {
        fontSize: 18,
        marginBottom: 5,
    },
    location: {
        fontSize: 18,
    },
});

export default ContactDetailScreen;
