// Import the functions you need from the SDKs you need
import firebase from '@react-native-firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCtq7gZUBRqCxT3KqX89Z92Kel-MpRJ9Ok",
  authDomain: "psesmuiotproject.firebaseapp.com",
  projectId: "psesmuiotproject",
  storageBucket: "psesmuiotproject.appspot.com",
  messagingSenderId: "453430486437",
  appId: "1:453430486437:web:eda75941620a5cc431f44c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth();

export {
  app
}