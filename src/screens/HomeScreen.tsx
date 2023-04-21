import React from 'react'
import { Text, View } from 'react-native';
import { GlobalStyles } from '../theme/GlobalTheme';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { ButtonElement2 } from '../components/ButtonElement2';

//interface Props extends StackScreenProps<any, any> { }
// interface Props extends DrawerScreenProps<any, any> { };

export const HomeScreen = () => {

    // useEffect(() => {

    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Button title="Menu" onPress={() => navigation.toggleDrawer()}/>
    //             // <TouchableOpacity style={MenuStyles.menuButton} onPress={() => navigation.toggleDrawer()}>
    //             //     <Icon name="menu-chip-outline" size={20} color={"black"} style={{ margin: 5 }} />
    //             // </TouchableOpacity >
    //         )
    //     })
    // }, [])


    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.logoContainer}>
                <LogoEncabezado />
                <Text style={GlobalStyles.titleEncabezado}>PSESMUIoT</Text>
            </View>
            <View style={GlobalStyles.buttonContainerLogin}>
                <ButtonElement2 title='Ver mapa' onPress={() => {}} />
            </View>
        </View>
    )
}

