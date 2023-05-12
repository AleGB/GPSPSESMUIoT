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

export const AddDeviceScreen = ({ navigation }: Props) => {

    const { idDispositivo, SIM, user, onChange } = useForm({
        idDispositivo: '',
        SIM: '',
        user: ''
    });

    const addDevice = () => {
        console.log({ idDispositivo, SIM, user })
    }

    return (
        <>

            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
                <ScrollView style={GlobalStyles.scrollView}>
                    {/* Form */}
                    <View style={GlobalStyles.container}>
                        <View style={GlobalStyles.logoContainer}>
                            <LogoEncabezado />
                            <Text style={GlobalStyles.titleEncabezado}>PSESMUIoT</Text>
                        </View>

                        <View style={GlobalStyles.form}>
                            <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorgreen]}>ID del dispositivo</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblackpink, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                underlineColorAndroid="mediumpurple" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'idDispositivo')}
                                value={idDispositivo}
                                onSubmitEditing={addDevice}

                            />

                            <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorgreen]}>Número de SIM</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblackpink, (Platform.OS === 'ios') && FormsStyles.txtInputIOS]}
                                keyboardType="numeric" underlineColorAndroid="mediumpurple" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'SIM')}
                                value={SIM}
                                onSubmitEditing={addDevice}

                            />

                            <Text style={[GlobalStyles.label2, FormsStyles.txtInputcolorgreen]}>Nombre de la persona a localizar</Text>
                            <TextInput style={[GlobalStyles.txtInputAndroid, FormsStyles.txtInputcolorblackpink, (Platform.OS === 'ios') && GlobalStyles.txtInputIOS]}
                                underlineColorAndroid="mediumpurple" selectionColor="rgba(85, 85, 85, 0.8)" autoCapitalize="none" autoCorrect={false}

                                // onChange y submit
                                onChangeText={(value) => onChange(value, 'user')}
                                value={user}
                                onSubmitEditing={addDevice}

                            />

                        </View>

                        <View style={GlobalStyles.buttonContainerLogin}>
                            <ButtonElement3 title='Vincular' onPress={() => { }} />
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

