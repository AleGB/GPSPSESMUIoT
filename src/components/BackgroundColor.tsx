import React from 'react'
import { StyleSheet, View } from 'react-native';

export const BackgroundColor = () => {
    return (
        <View
            style={styles.bg}>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'white'
    }
});