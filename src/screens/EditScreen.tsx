import React from 'react'
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalStyles } from '../theme/GlobalTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { FormsStyles } from '../theme/FormsTheme';
import { ButtonElement3 } from '../components/ButtonElement2';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> { }

export const EditScreen = ({ navigation }: Props) => {

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

    const editData = () => {
        console.log({ nombres, apellidos, correo, edad, celular, estado, municipio, cp, password, password2 })
    }

    return (
        <>

            <KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
                <ScrollView style={GlobalStyles.scrollView}>
                    {/* Form */}
                    <View style={GlobalStyles.container}>
                        <View style={GlobalStyles.logoContainer}>
                            <LogoEncabezado />
                            <Text style={GlobalStyles.titleEncabezado}>PSESMUIoT</Text>
                        </View>

                        <View style={GlobalStyles.form}>
                            <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '53%' }]}>Nombre(s)</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'nombres')}
                                value={nombres}
                                onSubmitEditing={editData}

                            />

                            <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '53%' }]}>Apellidos</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'apellidos')}
                                value={apellidos}
                                onSubmitEditing={editData}

                            />


                            <View style={GlobalStyles.columsTitles}>
                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '80%' }]}>Correo electrónico</Text>

                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '20%' }]}>Edad</Text>
                            </View>

                            <View style={GlobalStyles.colums}>
                                <TextInput style={[FormsStyles.txtInputAndroidCorreo, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && FormsStyles.txtInputIOSCorreo]}
                                    keyboardType="email-address" underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => onChange(value, 'correo')}
                                    value={correo}
                                    onSubmitEditing={editData}

                                />

                                <TextInput style={[FormsStyles.txtInputAndroidEdad, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && FormsStyles.txtInputIOSEdad]}
                                    keyboardType="numeric" underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => onChange(value, 'edad')}
                                    value={edad}
                                    onSubmitEditing={editData}

                                />
                            </View>

                            <View style={GlobalStyles.columsTitles}>
                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '53%' }]}>Número de celular</Text>

                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '53%' }]}>Estado</Text>
                            </View>

                            <View style={GlobalStyles.colums}>
                                <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                    keyboardType="numeric" underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => onChange(value, 'celular')}
                                    value={celular}
                                    onSubmitEditing={editData}

                                />

                                <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                    underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => onChange(value, 'estado')}
                                    value={estado}
                                    onSubmitEditing={editData}

                                />
                            </View>

                            <View style={GlobalStyles.columsTitles}>
                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '53%' }]}>Municipio</Text>

                                <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '53%' }]}>Código Postal</Text>
                            </View>

                            <View style={GlobalStyles.colums}>
                                <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                    underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => onChange(value, 'municipio')}
                                    value={municipio}
                                    onSubmitEditing={editData}

                                />

                                <TextInput style={[FormsStyles.txtInputAndroid, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                    underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                    // onChange y submit
                                    onChangeText={(value) => onChange(value, 'cp')}
                                    value={cp}
                                    onSubmitEditing={editData}

                                />
                            </View>

                            <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '53%' }]}>Contraseña</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'password')}
                                value={password}
                                onSubmitEditing={editData}

                            />

                            <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorblack, { width: '53%' }]}>Confirmar contraseña</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblack, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                underlineColorAndroid="gray" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'password2')}
                                value={password2}
                                onSubmitEditing={editData}

                            />
                        </View>

                        <View style={GlobalStyles.buttonContainerLogin}>
                            <ButtonElement3 title='Guardar' onPress={() => { }} />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

