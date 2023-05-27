import React from 'react'
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../theme/GlobalTheme';

export const LogoEncabezado = () => {
    return (
        <View style={GlobalStyles.iconLocationEncabezado}>
            <Image style={GlobalStyles.logoContainer} source={require('./../images/encabezado2.png')} />
        </View>
    )
}

