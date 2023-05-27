import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';
import { Fab } from './Fab';
import { getUbicacionDispositivo } from '../hooks/getsHook';

interface Props {
    n_SIM: string;
    propietario: string;
    latitudH: string;
    longitudH: string;
}

export const Map = ({ n_SIM, propietario, latitudH, longitudH }: Props) => {
    const [databaseLocation, setDatabaseLocation] = useState({
        latitude: 0,
        longitude: 0,
    });
    console.log("ltenviados " + latitudH + "" + longitudH)
    const { hasLocation, userLocation, followUserLocation, stopFollowUserLocation, routeLines } = useLocation();

    const mapViewRef = useRef<MapView>(null);
    const following = useRef<boolean>(true);

    useEffect(() => {
        if (latitudH == "" && longitudH == "") {
            const loadData = async () => {
                try {
                    const dispUbicacion = await getUbicacionDispositivo(n_SIM);
                    if (!dispUbicacion) {
                        throw new Error("No se pudo obtener la información del dispositivo");
                    }
                    const { latitud, longitud } = dispUbicacion;
                    console.log("ltbasededatos " + latitud + "" + longitud)
                    setDatabaseLocation({
                        latitude: convertToDecimal(latitud),
                        longitude: convertToDecimal(longitud),
                    });
                } catch (error) {
                    console.log(error);
                }
            };
            loadData();
        } else {
            setDatabaseLocation({
                latitude: convertToDecimal(latitudH),
                longitude: convertToDecimal(longitudH),
            });
        }
    }, [n_SIM, latitudH, longitudH]);

    
    useEffect(() => {
        followUserLocation();
        return () => {
            stopFollowUserLocation();
        };
    }, []);

    useEffect(() => {
        if (!following.current) return;
        const { latitude, longitude } = userLocation;
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
        });
    }, [userLocation]);

    const convertToDecimal = (coordinate: string) => {
        const [degrees, minutes] = coordinate.split(' ');
        const [minutesPart, secondsPart] = minutes.split('.');
        const minutesDecimal = parseInt(minutesPart) + parseFloat(`0.${secondsPart}`);
        let decimalCoordinate = parseInt(degrees) + minutesDecimal / 60;
        if (coordinate.includes('S') || coordinate.includes('W')) {
            decimalCoordinate *= -1;
        }
        return decimalCoordinate;
    };

    const centerPosition = () => {
        const latitude = databaseLocation.latitude;
        const longitude = databaseLocation.longitude;
        following.current = true;
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
        });
    };

    if (!hasLocation) {
        return <LoadingScreen />;
    }
    console.log(databaseLocation.latitude, databaseLocation.longitude);
    return (
        <>
            <MapView
                ref={mapViewRef}
                style={{ flex: 1 }}
                showsUserLocation
                initialRegion={{
                    latitude: databaseLocation.latitude,
                    longitude: databaseLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={() => (following.current = false)}
            >
                <Polyline coordinates={routeLines} strokeColor="black" strokeWidth={3} />

                <Marker
                    image={require('../images/markerUsuaria.png')}
                    coordinate={{
                        latitude: databaseLocation.latitude,
                        longitude: databaseLocation.longitude,
                    }}
                    title={propietario}
                    description={"Coordenadas: " + databaseLocation.latitude + "," + databaseLocation.longitude}
                />
            </MapView>

            <Fab
                iconName="compass-outline"
                onPress={centerPosition}
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                }}
            />
        </>
    );
};
