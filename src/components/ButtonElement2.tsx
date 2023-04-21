import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'
import { GlobalStyles } from '../theme/GlobalTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string;
    onPress: () => void
}

export const ButtonElement2 = ({ title, onPress }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity activeOpacity={0.8} style={GlobalStyles.buttonStyleIOS} onPress={onPress}>
                <Icon name="map-outline" size={20} color={"#ffffff"} style={{ margin: 5 }} />
                <Text style={[GlobalStyles.buttonText, {fontWeight: 'normal'}]}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <TouchableNativeFeedback style={{alignItems: 'center'}} background={TouchableNativeFeedback.Ripple('#FA8A65', false, 75)} onPress={onPress}>
                <View style={[GlobalStyles.buttonStyleAndroid, GlobalStyles.mapsButton]}>
                    <Icon name="map-outline" size={20} color={"#ffffff"} style={{ margin: 5 }} />
                    <Text style={[GlobalStyles.buttonText, {fontWeight: 'normal'}]}>
                        {title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();

}

export const ButtonElement3 = ({ title, onPress }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity activeOpacity={0.8} style={GlobalStyles.buttonStyleIOS} onPress={onPress}>
                <Text style={[GlobalStyles.buttonText, {fontWeight: 'normal'}]}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <TouchableNativeFeedback style={{alignItems: 'center'}} background={TouchableNativeFeedback.Ripple('#FA8A65', false, 75)} onPress={onPress}>
                <View style={[GlobalStyles.buttonStyleAndroid, GlobalStyles.saveButton]}>
                    <Text style={[GlobalStyles.buttonText, {fontWeight: 'normal'}]}>
                        {title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();

}