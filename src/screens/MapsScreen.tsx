import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../theme/GlobalTheme';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { Map } from '../components/Map';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

interface DispParams {
  n_SIM: string;
  propietario: string;
  latitudH: string;
  longitudH: string;
}

export const MapsScreen = ({ route, navigation }: Props) => {
  const params = route.params as DispParams;

  return (
    <View style={GlobalStyles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DeviceScreen', {
            n_SIM: params.n_SIM,
            propietario: params.propietario,
          })
        }
        style={styles.backButton}
      >
        <Icon name="arrow-back" size={25} color="white" />
      </TouchableOpacity>

      <View style={styles.mapContainer}>
        <Map
          n_SIM={params.n_SIM}
          propietario={params.propietario}
          latitudH={params.latitudH}
          longitudH={params.longitudH}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#BA90C6',
    padding: 10,
    borderRadius: 5,
    zIndex: 1, // Asegura que el botón esté en la parte superior
  },
  mapContainer: {
    flex: 1,
    zIndex: 0, // Asegura que el mapa esté debajo del botón
  },
});
