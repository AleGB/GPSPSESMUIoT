import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CardButtonProps {
    title: string;
    onPress: () => void;
}

export const CardButtonMap: React.FC<CardButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.cardButton}>
            <View style={styles.card}>
                <View style={styles.content}>
                    {/* <View style={styles.textContainer}>
                        <Image style={styles.icon} source={require('./../images/mapaImg.jpg')} />
                    </View> */}
                    <ImageBackground
                        source={require('./../images/mapaImg.jpg')}
                        style={styles.icon}>
                    </ImageBackground>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardButton: {
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    card: {
        backgroundColor: '#C0DBEA',
        borderRadius: 10,
        padding: 20,
        width: 320,
        borderWidth: 2,
        borderColor: '#BA90C6',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 125,
        height: 100,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        marginTop: 2,
        justifyContent: 'center', // Alinea el contenido verticalmente al centro
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right', // Centra el texto horizontalmente
    },
    subtitle: {
        color: '#BA90C6',
        fontSize: 11,
        fontWeight: 'normal',
    },
});
