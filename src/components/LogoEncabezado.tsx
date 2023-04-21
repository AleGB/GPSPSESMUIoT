import React from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../theme/GlobalTheme';

export const LogoEncabezado = () => {
    return (
        <View style={GlobalStyles.iconLocationEncabezado}>
            <Icon name="location-outline" size={20} color={"white"} />
        </View>
    )
}

