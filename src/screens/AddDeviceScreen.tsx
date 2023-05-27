import React, { useEffect, useState } from 'react'
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalStyles } from '../theme/GlobalTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { FormsStyles } from '../theme/FormsTheme';
import { ButtonElement3 } from '../components/ButtonElement2';
import { useForm } from '../hooks/useForm';
import { onLogin } from '../hooks/LoginHook';
import { addDevice, addDeviceUsuario } from '../hooks/DeviceHook';
import { firebase } from '@react-native-firebase/auth';
import { getInfo } from '../hooks/getsHook';

interface Props extends StackScreenProps<any, any> { }

export const AddDeviceScreen = ({ navigation }: Props) => {

    const {SIM, user, onChange } = useForm({
        SIM: '',
        user: ''
    });

    const [userDeviceData, setUserDeviceData] = useState({
        dispositivos: []
    });

    useEffect(() => {
        const loadData = async () => {
            const currentUser = firebase.auth().currentUser;
            if (currentUser) {
                const uid = currentUser.uid;
                try {
                    const userData = await getInfo(uid);
                    if (!userData) {
                        throw new Error("No se pudo obtener la información del usuario");
                    }
                    setUserDeviceData({ ...userData, dispositivos: userData.dispositivos });
                } catch (error) {
                    console.log(error);
                }
            }
        };
        loadData();
    }, []);

    console.log(userDeviceData.dispositivos)
    const handleDevice = () => {
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
            const uid = currentUser.uid;
            let auxArray: string[];
            auxArray=userDeviceData.dispositivos;
            auxArray.push(SIM);
            console.log({ SIM, auxArray, user })
            addDeviceUsuario(SIM, auxArray , user, uid);
        }
    }

    return (
        <>

            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
                <ScrollView style={GlobalStyles.scrollView}>
                    {/* Form */}
                    <View style={GlobalStyles.container}>
                        <View style={GlobalStyles.logoContainer}>
                            <LogoEncabezado />
                        </View>

                        <View style={GlobalStyles.form}>
                            {/* <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorgreen]}>ID del dispositivo</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblackpink, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                underlineColorAndroid="mediumpurple" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'idDispositivo')}
                                value={idDispositivo}
                                onSubmitEditing={addDevice}

                            /> */}

                            <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorgreen]}>Número de SIM</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblackpink, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                keyboardType="numeric" underlineColorAndroid="mediumpurple" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'SIM')}
                                value={SIM}

                            />

                            <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorgreen]}>Nombre de la persona a localizar</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblackpink, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                underlineColorAndroid="mediumpurple" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'user')}
                                value={user}

                            />

                        </View>

                        <View style={GlobalStyles.buttonContainerLogin}>
                            <ButtonElement3 title='Vincular' onPress={handleDevice} />
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

