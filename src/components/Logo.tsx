import React from 'react'
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../theme/GlobalTheme';

export const Logo = () => {
    return (
        <View style={GlobalStyles.iconLocation}>
            <Icon name="location-outline" size={30} color={"white"} />
        </View>
    )
}

