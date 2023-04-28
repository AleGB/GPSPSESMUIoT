import React from 'react'
import { Text, View } from 'react-native';
import { GlobalStyles } from '../theme/GlobalTheme';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { ButtonElement2 } from '../components/ButtonElement2';
import MapView from 'react-native-maps';
import { Map } from '../components/Map';


export const MapsScreen = () => {
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.logoContainer}>
                <LogoEncabezado />
                <Text style={GlobalStyles.titleEncabezado}>PSESMUIoT</Text>
            </View>
            <Map />
        </View>
    )
}

//19.505296517963934, -99.14660736143321
