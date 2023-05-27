// Firebase
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const editInfo = async (uid: string, formValues: any) => {
    firestore()
        .collection('Usuario')
        .doc(uid)
        .update({
            nombres: formValues.nombres,
            apellidos: formValues.apellidos,
            correo: formValues.correo,
            edad: formValues.edad,
            celular: formValues.celular,
            estado: formValues.estado,
            municipio: formValues.municipio,
            cp: formValues.cp,
            password: formValues.password
        })
        .then(() => {
            console.log('User updated!');
            Alert.alert('User updated!');
        });
}