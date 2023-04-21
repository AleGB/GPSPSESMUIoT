import React from 'react'
import { ImageBackground } from 'react-native';
import { GlobalStyles } from '../theme/GlobalTheme';

export const BackgroundImage = () => {
  return (
    <ImageBackground
      source={require('./../images/fondo_Login.png')}
      style={GlobalStyles.imgBgd}>
    </ImageBackground>
  )
}

