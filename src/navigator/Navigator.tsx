import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { RecoverPass } from '../screens/RecoverPass';
import { InicioScreen } from '../screens/InicioScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { MapsScreen } from '../screens/MapsScreen';


const Stack = createStackNavigator();

export const Navigator = () => {

  const { permissions } = useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />
  }

  return (
    <Stack.Navigator
      initialRouteName='InicioScreen'
      screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>

      {
        (permissions.locationStatus === 'granted')
          ? <Stack.Screen name="InicioScreen" component={InicioScreen} />
          : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      }
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RecoverPass" component={RecoverPass} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="MapsScreen" component={MapsScreen} />
    </Stack.Navigator>
  );
}