// Firebase
import { Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { onRegister } from '../hooks/RegisterHook';
import firebase from '@react-native-firebase/app';

export const onLogin = async (navigation: StackNavigationProp<any, any, undefined>, correo: string, password: string) => {

    auth()
        .signInWithEmailAndPassword(correo, password)
        .then(() => {
            console.log('User Login');
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }],
              })
        })
        .catch(error => {
            if (error.code === 'auth/user-not-found') {
                console.log('User not found');
                Alert.alert('User not found');
            }

            if (error.code === 'auth/wrong-password') {
                console.log('That password is invalid!');
                Alert.alert('That password is invalid!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                Alert.alert('That email address is invalid!');
            }

            console.error(error);
        });
}

export const outLogin = async (navigation: DrawerNavigationHelpers) => {
    try {
      await auth().signOut();
      console.log('User signed out!');
      Alert.alert('Ha cerrado su sesión');
      navigation.navigate('Navigator');
    } catch (error) {
      console.log('Error signing out:', error);
      // Manejar el error según tus necesidades
    }
  };

  export const RecoverPassFunction = (formValues:any) => {
    firebase
        .auth()
        .sendPasswordResetEmail(formValues.correo)
        .then(() => {
        Alert.alert('Envío de correo para cambio de contraseña');
        })
        .catch((error: Error) => {
        Alert.alert(error.message);
        });
    }
