// Firebase
import { Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

export const onLogin = async (navigation: StackNavigationProp<any, any, undefined>, correo: string, password: string) => {

    auth()
        .signInWithEmailAndPassword(correo, password)
        .then(() => {
            console.log('User Login');
            navigation.navigate('HomeScreen');
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
    auth()
        .signOut()
        .then(
            () => console.log('User signed out!')
        );
    Alert.alert('Ha cerrado su sesión');
    return navigation.navigate('LoginScreen');
}
