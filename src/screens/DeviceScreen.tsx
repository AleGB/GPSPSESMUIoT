import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../theme/GlobalTheme';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { ButtonElement2 } from '../components/ButtonElement2';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { CardButtonMap } from '../components/CardButtonMap';
import { CardButtonHistory } from '../components/CardButtonHistory';

interface Props extends DrawerScreenProps<any, any> { }

interface DispParams {
    n_SIM: string,
    propietario: string
}

export const DeviceScreen = ({ route, navigation }: Props) => {
    const params = route.params as DispParams;

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.logoContainer}>
                <LogoEncabezado />
            </View>
            <View style={GlobalStyles.titleContainer}>
                <Text style={GlobalStyles.titleDispositivos}>Número de SIM: {params.n_SIM}</Text>
                <Text style={GlobalStyles.titleDispositivos}>Propietario: {params.propietario}</Text>
            </View>
            <View>
                <CardButtonMap
                    title={"Ubicacion actual de la usuaria"}
                    onPress={() => navigation.navigate('MapsScreen', { n_SIM: params.n_SIM, propietario: params.propietario, latitudH: "", longitudH: "" })}
                />
            </View>
            <View>
                <CardButtonHistory
                    title={"Ver historial de ubicaciones"}
                    onPress={() => navigation.navigate('LocationHistoryScreen', { n_SIM: params.n_SIM, propietario: params.propietario })}
                />
            </View>
            {/* <View style={GlobalStyles.buttonContainerLogin}>
                <ButtonElement2 title="Ver mapa" onPress={() => navigation.navigate('MapsScreen', { n_SIM: params.n_SIM, propietario: params.propietario })} />
            </View>
            <View style={GlobalStyles.buttonContainerLogin}>
                <ButtonElement2 title="Historial" onPress={() => navigation.navigate('LocationHistoryScreen', { n_SIM: params.n_SIM, propietario: params.propietario })} />
            </View> */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: '#BA90C6',
        padding: 10,
        borderRadius: 5,
    },
    backButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});