import React, {useState} from 'react'
import { View, Text, Platform, KeyboardAvoidingView, Alert } from 'react-native';
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
import { onRegister } from '../hooks/RegisterHook';
import firebase from '@react-native-firebase/app';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { RecoverPassFunction } from '../hooks/LoginHook';

interface Props extends StackScreenProps<any, any> { }

export const RecoverPass = ({ navigation }: Props) => {
    const [errorCorreo, setErrorCorreo] = useState(null)
    const {  correo, onChange } = useForm({

        correo: '',
        
    });



    const handleRecoverPass = () => {
        const formValues = { correo }
        //onRegister(navigation, formValues);
        RecoverPassFunction(formValues);
        // navigation.navigate('HomeScreen')
    }
/*
    const onSubmit = () => {
        if (!validateData ()){
            return
        }
        console.log("Yes")
    }
    const validateData = () => {
        setErrorCorreo(null)
        let valid = true

        if (!validateCorreo(correo)){
            setErrorCorreo ("Debes infresar un correo válido.")
            valid = false
        }
    }
*/
    // const onRegister = () => {
    //     console.log({ nombres, apellidos, correo, edad, celular, estado, municipio, cp, password, password2 })
    // }

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
                    

                        <View style={GlobalStyles.colums}>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorwhite, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                placeholder="Correo electrónico" placeholderTextColor="rgba(255, 255, 255, 0.6)" underlineColorAndroid="white"
                                selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'correo')}
                                value={correo}
                            // onSubmitEditing={onRegister}

                            />
                        </View>

                    </View>

                    <View style={GlobalStyles.buttonContainerLogin}>
                        <ButtonElement title='Recuperar contraseña' onPress={handleRecoverPass} />
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

