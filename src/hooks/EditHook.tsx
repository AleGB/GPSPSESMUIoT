// Firebase
import { Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export const getInfo = async (uid: string) => {
    const documentSnapshot = await firestore()
        .collection('Usuario')
        .doc(uid)
        .get();

    console.log('User exists: ', documentSnapshot.exists);
    if (documentSnapshot.exists) {
        // console.log('User data: ', documentSnapshot.data());
        return documentSnapshot.data();
    }
    return null; // en caso de que no exista un documento con ese id
}

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