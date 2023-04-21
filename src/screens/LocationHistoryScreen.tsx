import React from 'react'
import { Text, View } from 'react-native';
import { GlobalStyles } from '../theme/GlobalTheme';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { ButtonElement2 } from '../components/ButtonElement2';


export const LocationHistoryScreen = () => {

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.logoContainer}>
                <LogoEncabezado />
                <Text style={GlobalStyles.titleEncabezado}>PSESMUIoT</Text>
            </View>
            <View style={GlobalStyles.buttonContainerLogin}>
                <ButtonElement2 title='Ver mapa' onPress={() => { }} />
            </View>
        </View>
    )
}

