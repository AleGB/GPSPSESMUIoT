import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export const addDeviceUsuario = async (idDispositivo: string, SIM: string[], user: string, uid: string) => {
    firestore()
        .collection('Usuario')
        .doc(uid)
        .update({
            dispositivos: SIM
        })
        .then(() => {
            console.log('Dispositivo vinculado');
            Alert.alert('Dispositivo vinculado');
        });
        addDevice(idDispositivo, SIM, user);
}

export const addDevice = async (idDispositivo: string, SIM: string[], user: string) => {
    firestore()
        .collection('Dispositivo')
        .doc(idDispositivo)
        .set({
            n_SIM: idDispositivo,
            propietario: user
        })
        .then(() => {
            console.log('Dispositivo agregado');
            Alert.alert('Dispositivo agregado');
        });

}