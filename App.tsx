import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Menu } from './src/navigator/Menu';
import { PermissionsProvider } from './src/context/PermissionsContext';
import { enableLatestRenderer } from 'react-native-maps';
import { PermissionsSMSProvider } from './src/context/PermissionsSMSContext';


enableLatestRenderer();

const AppState = ({ children }: any) => {

  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )

}
const AppStateSMS = ({ children }: any) => {

  return (
    <PermissionsSMSProvider>
      {children}
    </PermissionsSMSProvider>
  )

}
const App = () => {
  
  return (
    <NavigationContainer>
      <AppStateSMS>
        <AppState>
          <Menu />
          {/* <Navigator/> */}
        </AppState>
      </AppStateSMS>
    </NavigationContainer>
  )
}

export default App;

//psesmuiot@gmail.com pass: PS3SMU10T