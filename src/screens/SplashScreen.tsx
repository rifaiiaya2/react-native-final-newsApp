import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash'; // import the bootsplash module
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../navigation/Main.Navigator.types';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';

const SplashScreen = () => {
  const {accessToken, rehydrated} = useSelector(
    (state: RootState) => state.auth,
  );
  const navigation = useNavigation<MainNavigatorNavigationProp>();

  useEffect(() => {
    if (rehydrated) {
      RNBootSplash.hide({fade: true}).then(() => {
        console.log('BootSplash success');
        if (accessToken) {
          navigation.navigate('Feeds');
        } else {
          navigation.navigate('LoginScreen');
        }
      });
    }
  }, [accessToken, rehydrated, navigation]);

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SplashScreen;
