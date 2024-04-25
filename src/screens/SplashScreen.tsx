import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
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
      if (accessToken) {
        navigation.navigate('Feeds');
      } else {
        navigation.navigate('LoginScreen');
      }
    }
  }, [accessToken, rehydrated, navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default SplashScreen;
