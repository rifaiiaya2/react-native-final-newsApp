import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface IGradientTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}
const GradientText = (props: IGradientTextProps) => {
  const {children, style} = props;

  return (
    <MaskedView
      style={StyleSheet.absoluteFill}
      maskElement={<Text style={[styles.maskedText, style]}>{children}</Text>}>
      <LinearGradient
        colors={['#e9be27', '#c855aa', '#e3ab3f', '#d68270']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradientStyle}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskedText: {
    fontSize: 76,
    color: 'black',
  },
  linearGradientStyle: {
    flex: 1,
  },
});

export default GradientText;
