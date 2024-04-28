import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const imageData = [
  {id: '1', image: require('../../assets/images/carousel1.jpg')},
  {id: '2', image: require('../../assets/images/carousel2.jpg')},
  {id: '3', image: require('../../assets/images/carousel3.jpg')},
  {id: '4', image: require('../../assets/images/carousel4.jpg')},
  {id: '5', image: require('../../assets/images/carousel5.jpeg')},
  {id: '6', image: require('../../assets/images/carousel6.jpg')},
];

const {width} = Dimensions.get('window');
const AppCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={240}
        data={imageData}
        loop={true}
        autoPlay={true}
        autoPlayInterval={5000}
        renderItem={({item}) => (
          <Image source={item.image} style={styles.image} />
        )}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 55,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default AppCarousel;
