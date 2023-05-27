import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

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

export const getDispositivos = async (idDispositivo: string) => {
    const documentSnapshot = await firestore()
        .collection('Dispositivo')
        .doc(idDispositivo)
        .get();

    console.log('Dispositivo exists: ', documentSnapshot.exists);
    if (documentSnapshot.exists) {
        // console.log('User data: ', documentSnapshot.data());
        return documentSnapshot.data();
    }
    return null; // en caso de que no exista un documento con ese id
}

export const getElementsByIds = async (ids: string[]) => {
    try {
      const collectionRef = firebase.firestore().collection('Dispositivo'); // Reemplaza 'tu-coleccion' por el nombre de tu colección en Firestore
      const querySnapshot = await collectionRef.where(firebase.firestore.FieldPath.documentId(), 'in', ids).get();
  
      const elements: any[] = []; // Reemplaza 'any' por el tipo de tus elementos
  
      querySnapshot.forEach((doc) => {
        const element = doc.data();
        elements.push(element);
      });
  
      return elements;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  export const getUbicacionDispositivo = async (idDispositivo: string) => {
    const querySnapshot = await firestore()
      .collection('UbicacionesDispositivo')
      .doc(idDispositivo)
      .collection('Coordenadas')
      .orderBy('fechaHora', 'desc')
      .limit(1)
      .get();
  
    if (!querySnapshot.empty) {
      const lastDocument = querySnapshot.docs[0];
      const lastLocation = lastDocument.data();
      console.log("lastLocation "+{lastLocation})
      return lastLocation;
    }
  
    return null;
  };
  
  export const getUbicacionesHistorial = async (idDispositivo: string) => {
    const querySnapshot = await firestore()
      .collection('UbicacionesDispositivo')
      .doc(idDispositivo)
      .collection('Coordenadas')
      .orderBy('fechaHora', 'desc')
      .get();
  
    const ubicaciones = querySnapshot.docs.map((document) => document.data());
  
    if (ubicaciones.length > 0) {
      return ubicaciones;
    }
  
    return null;
  };
  