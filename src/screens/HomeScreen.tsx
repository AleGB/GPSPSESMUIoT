import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../theme/GlobalTheme';
import { LogoEncabezado } from '../components/LogoEncabezado';
import { ButtonElement2 } from '../components/ButtonElement2';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { firebase } from '@react-native-firebase/auth';
import { getInfo, getDispositivos, getElementsByIds } from '../hooks/getsHook';
import { CardButton } from '../components/CardButton';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends DrawerScreenProps<any, any> { }

export const HomeScreen = ({ navigation }: Props) => {
    const currentUser = firebase.auth().currentUser;

    const [userData, setUserData] = useState({
        nombres: '',
        apellidos: '',
        dispositivos: [],
    });
    const [dispData, setDispData] = useState<any[] | null>(null);

    useEffect(() => {
        const loadData = async () => {
            if (currentUser) {
                const uid = currentUser.uid;
                try {
                    const userData = await getInfo(uid);
                    if (!userData) {
                        throw new Error("No se pudo obtener la información del usuario");
                    }
                    setUserData({ ...userData, nombres: userData.nombres, apellidos: userData.apellidos, dispositivos: userData.dispositivos });

                    // Obtener los datos de los dispositivos
                    const dispositivosData = await getElementsByIds(userData.dispositivos);

                    setDispData(dispositivosData);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        loadData();
    }, [currentUser]);

    console.log({ userData });
    console.log({ dispData });

    if (!currentUser) {
        return null;
    }

    return (
        <View style={GlobalStyles.container}>
            <ScrollView contentContainerStyle={GlobalStyles.scrollView}>
                <View style={GlobalStyles.logoContainer}>
                    <LogoEncabezado />
                </View>
                <View style={GlobalStyles.titleContainer}>
                    <Text style={GlobalStyles.titleDispositivos}>Dispositivos vinculados:</Text>
                </View>
                <View>
                    {dispData?.map((item, index) => (
                        <CardButton
                            key={index}
                            title={item.propietario}
                            onPress={() =>
                                navigation.navigate('DeviceScreen', {
                                    n_SIM: item.n_SIM,
                                    propietario: item.propietario,
                                })
                            }
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};
