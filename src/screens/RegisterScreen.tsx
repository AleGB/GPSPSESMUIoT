import React from 'react'
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { BackgroundImage } from '../components/BackgroundImage';
import { LoginStyles } from '../theme/LoginTheme';
import { Logo } from '../components/Logo';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalStyles } from '../theme/GlobalTheme';
import { ButtonElement } from '../components/ButtonElement';
import { StackScreenProps } from '@react-navigation/stack';
import { RegisterStyles } from '../theme/RegisterTheme';
import { FormsStyles } from '../theme/FormsTheme';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {

    const { nombres, apellidos, correo, edad, celular, estado, municipio, cp, password, password2, onChange } = useForm({
        nombres: '',
        apellidos: '',
        correo: '',
        edad: '',
        celular: '',
        estado: '',
        municipio: '',
        cp: '',
        password: '',
        password2: ''
    });

    const onRegister = () => {
        console.log({ nombres, apellidos, correo, edad, celular, estado, municipio, cp, password, password2 })
    }

    return (
        <>
            {/* Background */}
            <BackgroundImage />

            <KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>

                {/* Form */}
                <View style={RegisterStyles.viewForm}>
                    <Logo />

                    <View style={GlobalStyles.titleView}>
                        <Text style={GlobalStyles.title}>PSESMUIoT</Text>
                    </View>

                    <View style={GlobalStyles.form}>
                        <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                            placeholder="Nombre(s)" placeholderTextColor="rgba(255, 255, 255, 0.6)" underlineColorAndroid="white"
                            selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                            // onChange y submit
                            onChangeText={(value) => onChange(value, 'nombres')}
                            value={nombres}
                            onSubmitEditing={onRegister}

                        />

                        <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                            placeholder="Apellidos" placeholderTextColor="rgba(255, 255, 255, 0.6)" underlineColorAndroid="white"
                            selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                            // onChange y submit
                            onChangeText={(value) => onChange(value, 'apellidos')}
                            value={apellidos}
                            onSubmitEditing={onRegister}

                        />

                        <View style={GlobalStyles.colums}>
                            <TextInput style={[FormsStyles.txtInputAndroidCorreo, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && FormsStyles.txtInputIOSCorreo]}
                                placeholder="Correo electrónico" placeholderTextColor="rgba(255, 255, 255, 0.6)" keyboardType="email-address"
                                underlineColorAndroid="white" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'correo')}
                                value={correo}
                                onSubmitEditing={onRegister}

                            />

                            <TextInput style={[FormsStyles.txtInputAndroidEdad, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && FormsStyles.txtInputIOSEdad]}
                                placeholder="Edad" placeholderTextColor="rgba(255, 255, 255, 0.6)" keyboardType="numeric"
                                underlineColorAndroid="white" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'edad')}
                                value={edad}
                                onSubmitEditing={onRegister}

                            />
                        </View>

                        <View style={GlobalStyles.colums}>
                            <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                placeholder="Número de celular" placeholderTextColor="rgba(255, 255, 255, 0.6)" keyboardType="numeric"
                                underlineColorAndroid="white" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'celular')}
                                value={celular}
                                onSubmitEditing={onRegister}

                            />

                            <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                placeholder="Estado" placeholderTextColor="rgba(255, 255, 255, 0.6)" underlineColorAndroid="white"
                                selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'estado')}
                                value={estado}
                                onSubmitEditing={onRegister}

                            />
                        </View>

                        <View style={GlobalStyles.colums}>
                            <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                placeholder="Municipio" placeholderTextColor="rgba(255, 255, 255, 0.6)" underlineColorAndroid="white"
                                selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'municipio')}
                                value={municipio}
                                onSubmitEditing={onRegister}

                            />

                            <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                placeholder="Codigo Postal" placeholderTextColor="rgba(255, 255, 255, 0.6)" underlineColorAndroid="white"
                                selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'cp')}
                                value={cp}
                                onSubmitEditing={onRegister}

                            />
                        </View>

                        <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                            placeholder="Contraseña" placeholderTextColor="rgba(255, 255, 255, 0.6)" underlineColorAndroid="white"
                            selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                            // onChange y submit
                            onChangeText={(value) => onChange(value, 'password')}
                            value={password}
                            onSubmitEditing={onRegister}

                        />

                        <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                            placeholder="Confirmar contraseña" placeholderTextColor="rgba(255, 255, 255, 0.6)" underlineColorAndroid="white"
                            selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                            // onChange y submit
                            onChangeText={(value) => onChange(value, 'password2')}
                            value={password2}
                            onSubmitEditing={onRegister}

                        />
                    </View>

                    <View style={GlobalStyles.buttonContainerLogin}>
                        <ButtonElement title='Registrarme' onPress={() => navigation.navigate('HomeScreen')} />
                    </View>

                    <View style={LoginStyles.newAcountView}>
                        <Text style={LoginStyles.passText}>¿Ya tienes una cuenta?</Text>
                        <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.replace('LoginScreen')}>
                            <Text style={LoginStyles.newAcountText}>Inicia Sesión</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                {/* </View> */}

            </KeyboardAvoidingView>
        </>
    )
}
