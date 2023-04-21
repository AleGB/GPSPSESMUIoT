import React from 'react'
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

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {

    const { correo, password, onChange } = useForm({
        correo: '',
        password: ''
    });

    const onLogin = () => {
        console.log({ correo, password })
    }

    return (
        <>
            {/* Background */}
            <BackgroundImage />

            <KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>

                {/* Form */}
                <View style={LoginStyles.viewForm}>
                    <Logo />

                    <View style={GlobalStyles.titleView}>
                        <Text style={GlobalStyles.title}>PSESMUIoT</Text>
                    </View>

                    <View style={LoginStyles.form}>
                        <Text style={[GlobalStyles.label1, FormsStyles.txtInputcolorwhite]}>Correo electrónico</Text>
                        <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                            placeholder="ejemplo@gmail.com" placeholderTextColor="rgba(255, 255, 255, 0.4)" keyboardType="email-address"
                            underlineColorAndroid="white" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                            // onChange y submit
                            onChangeText={(value) => onChange(value, 'correo')}
                            value={correo}
                            onSubmitEditing={onLogin}

                        />

                        <Text style={[GlobalStyles.label1, FormsStyles.txtInputcolorwhite]}>Contraseña</Text>
                        <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                            placeholder="******" placeholderTextColor="rgba(255, 255, 255, 0.4)" secureTextEntry={true} underlineColorAndroid="white"
                            selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                            // onChange y submit
                            onChangeText={(value) => onChange(value, 'password')}
                            value={password}
                            onSubmitEditing={onLogin}

                        />
                    </View>

                    <View style={LoginStyles.passView}>
                        <TouchableOpacity activeOpacity={0.2}>
                            <Text style={LoginStyles.passText}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={GlobalStyles.buttonContainerLogin}>
                        {/* onPress={onLogin} */}
                        <ButtonElement title='Iniciar sesión' onPress={() => navigation.navigate('HomeScreen')} />
                    </View>

                    <View style={LoginStyles.newAcountView}>
                        <Text style={LoginStyles.passText}>¿No tienes una cuenta?</Text>
                        <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.replace('RegisterScreen')}>
                            <Text style={LoginStyles.newAcountText}>Registrate</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>
        </>
    )
}
