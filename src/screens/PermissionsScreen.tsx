import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';
import { ButtonElement } from '../components/ButtonElement';
import { GlobalStyles } from '../theme/GlobalTheme';
import { PermissionsSMSContext } from '../context/PermissionsSMSContext';


export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext);
    const { permissionsSMS, askSMSPermission } = useContext(PermissionsSMSContext);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Es necesario el uso del GPS para usar esta aplicación </Text>

            <View style={GlobalStyles.buttonContainerLogin}>
                {/* onPress={onLogin} */}
                <ButtonElement title='Conceder permisos' onPress={askLocationPermission} />
            </View>

            <Text style={{ marginTop: 20 }}>
                {JSON.stringify(permissions, null, 5)}
            </Text>
        </View>
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
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    }
});
