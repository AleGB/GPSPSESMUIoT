// Firebase
import { Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import firebase from '@react-native-firebase/app';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';


export const onRegister = async (navigation: StackNavigationProp<any, any, undefined>, formValues: any) => {
       
    auth()
        .createUserWithEmailAndPassword(formValues.correo, formValues.password)
        .then(() => {
            const currentUser = firebase.auth().currentUser;
            if(currentUser){
            currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: "psesmuiotproject.firebaseapp.com",
            })
            .then(() => {
                Alert.alert('Envio de verificacion de correo');
            }).catch((error: Error) => {
                Alert.alert(error.message);
            });
        }
        })
        .then(() => {
            console.log('User account created & signed in!');
            const currentUser = firebase.auth().currentUser;
            if (currentUser) {
                const uid = currentUser.uid;
                firestore()
                .collection('Usuario')
                .doc(uid)
                .set({
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
                    console.log('User added!');
                });
            navigation.navigate('HomeScreen');
            } else {
            console.log('No hay usuario actualmente autenticado.');
            } 
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
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