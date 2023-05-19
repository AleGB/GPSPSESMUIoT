import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CardButtonProps {
  title: string;
  onPress: () => void;
}

export const CardButton: React.FC<CardButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardButton}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Image style={styles.icon} source={require('./../images/CardImg.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>Estado: Activo</Text>
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
    backgroundColor: '#BA90C6',
    borderRadius: 10,
    padding: 20,
    width: 320,
    borderWidth: 2,
    borderColor: '#BA90C6',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginTop: 3,
    marginRight: 10,
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    marginTop: 2,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'normal',
  },
});

