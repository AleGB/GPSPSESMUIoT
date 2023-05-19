import React, { useEffect, useState } from 'react'
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalStyles } from '../theme/GlobalTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { FormsStyles } from '../theme/FormsTheme';
import { ButtonElement3 } from '../components/ButtonElement2';
import { useForm } from '../hooks/useForm';
import { editInfo } from '../hooks/EditHook';
import { getInfo } from '../hooks/getsHook';
import { firebase } from '@react-native-firebase/auth';

export const EditScreen = () => {

    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
        const [userData, setUserData] = useState({
            nombres: '',
            apellidos: '',
            correo: '',
            edad: '',
            celular: '',
            estado: '',
            municipio: '',
            cp: '',
            password: ''
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
                        setUserData({ ...userData, nombres: userData.nombres, apellidos: userData.apellidos, correo: userData.correo, edad: userData.edad, celular: userData.celular, estado: userData.estado, municipio: userData.municipio, cp: userData.cp, password: userData.password });
                    } catch (error) {
                        console.log(error);
                    }
                }
            };
            loadData();
        }, []);

        const handleChange = (value: any, key: string,) => {
            setUserData({ ...userData, [key]: value });
        };

        const handleSave = () => {
            const currentUser = firebase.auth().currentUser;
            if (currentUser) {
                const uid = currentUser.uid;
                editInfo(uid, userData);
            }
        };

        const editData = () => {
            console.log({ userData })
        }
        return (
            <>

                <KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
                    <ScrollView style={GlobalStyles.scrollView}>
                        {/* Form */}
                        <View style={GlobalStyles.container}>
                            <View style={GlobalStyles.logoContainer}>
                                <LogoEncabezado />
                            </View>

                            <View style={GlobalStyles.form}>
                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '53%' }]}>Nombre(s)</Text>
                                <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                    underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => handleChange(value, 'nombres')}
                                    value={userData.nombres}
                                    onSubmitEditing={editData}

                                />

                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '53%' }]}>Apellidos</Text>
                                <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                    underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => handleChange(value, 'apellidos')}
                                    value={userData.apellidos}
                                    onSubmitEditing={editData}

                                />


                                <View style={GlobalStyles.columsTitles}>
                                    <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '80%' }]}>Correo electrónico</Text>

                                    <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '20%' }]}>Edad</Text>
                                </View>

                                <View style={GlobalStyles.colums}>
                                    <TextInput style={[FormsStyles.txtInputAndroidCorreo, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && FormsStyles.txtInputIOSCorreo]}
                                        keyboardType="email-address" underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                        // onChange y submit
                                        onChangeText={(value) => handleChange(value, 'correo')}
                                        value={userData.correo}
                                        onSubmitEditing={editData}

                                    />

                                    <TextInput style={[FormsStyles.txtInputAndroidEdad, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && FormsStyles.txtInputIOSEdad]}
                                        keyboardType="numeric" underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                        // onChange y submit
                                        onChangeText={(value) => handleChange(value, 'edad')}
                                        value={userData.edad}
                                        onSubmitEditing={editData}

                                    />
                                </View>

                                <View style={GlobalStyles.columsTitles}>
                                    <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '53%' }]}>Número de celular</Text>

                                    <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '53%' }]}>Estado</Text>
                                </View>

                                <View style={GlobalStyles.colums}>
                                    <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                        keyboardType="numeric" underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                        // onChange y submit
                                        onChangeText={(value) => handleChange(value, 'celular')}
                                        value={userData.celular}
                                        onSubmitEditing={editData}

                                    />

                                    <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                        underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                        // onChange y submit
                                        onChangeText={(value) => handleChange(value, 'estado')}
                                        value={userData.estado}
                                        onSubmitEditing={editData}

                                    />
                                </View>

                                <View style={GlobalStyles.columsTitles}>
                                    <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '53%' }]}>Municipio</Text>

                                    <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '53%' }]}>Código Postal</Text>
                                </View>

                                <View style={GlobalStyles.colums}>
                                    <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                        underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                        // onChange y submit
                                        onChangeText={(value) => handleChange(value, 'municipio')}
                                        value={userData.municipio}
                                        onSubmitEditing={editData}

                                    />

                                    <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                        underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                        // onChange y submit
                                        onChangeText={(value) => handleChange(value, 'cp')}
                                        value={userData.cp}
                                        onSubmitEditing={editData}

                                    />
                                </View>

                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '53%' }]}>Contraseña</Text>
                                <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                    underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => handleChange(value, 'password')}
                                    value={userData.password}
                                    onSubmitEditing={editData}

                                />

                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorpink, { width: '53%' }]}>Confirmar contraseña</Text>
                                <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorpurple, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                    underlineColorAndroid="lightblue" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => handleChange(value, 'password2')}
                                    value={userData.password}
                                    onSubmitEditing={editData}

                                />
                            </View>

                            <View style={GlobalStyles.buttonContainerLogin}>
                                <ButtonElement3 title='Guardar' onPress={handleSave} />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </>
        )
    }
}

