import {StatusBar} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientStatusBar = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <LinearGradient
        colors={['#e9be27', '#de9b52', '#d7856d', '#e3ab3f']}
        style={{
          height: StatusBar.currentHeight,
        }}
      />
    </>
  );
};

export default GradientStatusBar;
