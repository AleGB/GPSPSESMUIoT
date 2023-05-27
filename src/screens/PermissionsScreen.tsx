import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';
import { ButtonElement } from '../components/ButtonElement';
import { GlobalStyles } from '../theme/GlobalTheme';
import { BackgroundImage } from '../components/BackgroundImage';


export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext);


    return (
        <>
        {/* Background */}
        <BackgroundImage />
        <View style={styles.container}>
            <Text style={styles.title}>Es necesario el uso del GPS para usar esta aplicación </Text>

            <View style={GlobalStyles.buttonContainerLogin}>
                {/* onPress={onLogin} */}
                <ButtonElement title='Conceder permisos' onPress={askLocationPermission} />
            </View>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: 250,
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20
    }
});
