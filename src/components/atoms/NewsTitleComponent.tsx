import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import GradientText from './GradientText';

const NewsTitleComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/news.png')}
        style={styles.iconNews}
      />
      <GradientText style={styles.textTitle}>News</GradientText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 20,
    alignItems: 'center',
  },
  iconNews: {
    width: 50,
    height: 50,
  },
  textTitle: {
    paddingHorizontal: 60,
    fontSize: 36,
    fontWeight: '700',
    color: '#d17383',
  },
});

export default NewsTitleComponent;
