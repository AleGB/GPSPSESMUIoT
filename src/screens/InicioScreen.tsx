import React, { useState, useEffect } from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { BackgroundImage } from '../components/BackgroundImage';
import { LoginStyles } from '../theme/LoginTheme';
import { Logo } from '../components/Logo';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalStyles } from '../theme/GlobalTheme';
import { ButtonElement } from '../components/ButtonElement';
import { StackScreenProps } from '@react-navigation/stack';
import { FormsStyles } from '../theme/FormsTheme';
import { useForm } from '../hooks/useForm';
import { onLogin } from '../hooks/LoginHook';
//Firebase
import auth from '@react-native-firebase/auth';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { ButtonElement2 } from '../components/ButtonElement2';
import { HomeScreen } from './HomeScreen';

interface Props extends StackScreenProps<any, any> { }
interface User {
    uid: string;
    email: string | null;
}

export const InicioScreen = ({ navigation }: Props) => {

    /**
     * Estado de autenticación actual del usuario
     */

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    // Handle user state changes
    function onAuthStateChanged(user: User | null) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // Unsubscribe on unmount
    }, []);
    if (initializing) return (<></>);
    // if (initializing) return null;
    if (!user) {
        return (
            <>
                {/* Background */}
                <BackgroundImage />


                <View style={LoginStyles.viewForm}>
                    <Logo />

                    <View style={GlobalStyles.titleView}>
                        <Text style={GlobalStyles.title}>PSESMUIoT</Text>
                    </View>

                    <View style={GlobalStyles.buttonContainerLogin}>
                        {/* onPress={onLogin} */}
                        <ButtonElement title='Comenzar' onPress={() => navigation.navigate('LoginScreen')} />
                    </View>

                </View>

            </>
        )
    } else {
        return (
            <HomeScreen/>
        )
    }

}

