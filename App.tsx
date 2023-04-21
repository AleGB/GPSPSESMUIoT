import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { Menu } from './src/navigator/Menu';

const App = () => {
  return (
    <NavigationContainer>
      <Menu/>
      {/* <Navigator/> */}
    </NavigationContainer>
  )
}

export default App;

//psesmuiot@gmail.com pass: PS3SMU10T