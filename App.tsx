import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { Menu } from './src/navigator/Menu';
import { PermissionsProvider } from './src/context/PermissionsContext';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const AppState = ({ children }: any) =>{

  return (
    <PermissionsProvider>
      { children }
    </PermissionsProvider>
  )

}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      <Menu/>
      {/* <Navigator/> */}
      </AppState>
    </NavigationContainer>
  )
}

export default App;

//psesmuiot@gmail.com pass: PS3SMU10T