import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'
import { GlobalStyles } from '../theme/GlobalTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string;
    onPress: () => void
}

export const ButtonElement = ({ title, onPress }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity activeOpacity={0.8} style={GlobalStyles.buttonStyleIOS} onPress={onPress}>
                <Text style={[GlobalStyles.buttonText, {fontWeight: 'bold'}]}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#FA8A65', false, 75)} onPress={onPress}>
                <View style={GlobalStyles.buttonStyleAndroid}>
                <Text style={[GlobalStyles.buttonText, {fontWeight: 'bold'}]}>
                        {title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();

}