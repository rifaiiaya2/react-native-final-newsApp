import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppCarousel from './AppCarousel';
import NewsCardComponent from '../moleculs/NewsCardComponent';
import NewsTitleComponent from './NewsTitleComponent';
import GradientStatusBar from './GradientStatusBar';

const NewsComponent = () => {
  return (
    <>
      <GradientStatusBar />
      <View style={styles.appCarouselView}>
        <AppCarousel />
        <View style={styles.newsComponentsView}>
          <NewsTitleComponent />
          <NewsCardComponent />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  appCarouselView: {
    flex: 1,
    paddingTop: 15,
  },
  newsComponentsView: {
    paddingTop: 250,
  },
});

export default NewsComponent;
