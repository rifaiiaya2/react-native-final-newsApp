import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomActivityIndicator = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#e9be27', '#c855aa', '#e3ab3f', '#d68270']}
        style={styles.linearGradient}>
        <ActivityIndicator size="large" color="#ffffff" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  linearGradient: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
export default CustomActivityIndicator;
