import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { GlobalStyles } from '../theme/GlobalTheme';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { getUbicacionesHistorial } from '../hooks/getsHook';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends DrawerScreenProps<any, any> { }

interface DispParams {
    n_SIM: string;
    propietario: string;
}

export const LocationHistoryScreen = ({ route, navigation }: Props) => {
    const params = route.params as DispParams;
    const [ubicaciones, setUbicaciones] = useState<any[] | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const ubicacionesData = await getUbicacionesHistorial(params.n_SIM);
                if (ubicacionesData) {
                    setUbicaciones(ubicacionesData);
                }
            } catch (error) {
                console.log(error);
            }
        };
        loadData();
    }, []);

    console.log("ibj ubi: " + ubicaciones)
    const handleLocationPress = (latitud: string, longitud: string) => {
        // Navegar a la pantalla MapsScreen y pasar los datos de ubicación
        navigation.navigate('MapsScreen', { n_SIM: params.n_SIM, propietario: params.propietario, latitudH: latitud, longitudH: longitud });
    };

    return (
        <ScrollView style={GlobalStyles.scrollView}>
            <View style={GlobalStyles.container}>
                <View style={GlobalStyles.logoContainer}>
                    <LogoEncabezado />
                </View>
                <View style={GlobalStyles.buttonContainerLogin}>
                    {ubicaciones &&
                        ubicaciones.map((ubicacion, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() =>
                                    handleLocationPress(ubicacion.latitud, ubicacion.longitud)
                                }
                                style={styles.locationButton}
                            >
                                <View style={styles.locationContainer}>
                                    <Text style={styles.locationText}>
                                        {ubicacion.latitud} - {ubicacion.longitud} -{' '}
                                        {ubicacion.fechaHora.toDate().toLocaleString()}
                                    </Text>
                                    <Icon name="arrow-forward" size={20} color="black" />
                                </View>
                            </TouchableOpacity>
                        ))}
                </View>
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
            </View>
        </ScrollView>
    );
};

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
    locationButton: {
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#BA90C6',
        borderRadius: 5,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    locationText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
});
