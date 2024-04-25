import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
export type MainNavigatorParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  Feeds: undefined;
  SplashScreen: undefined;
};

export type MainNavigatorNavigationProp =
  NativeStackNavigationProp<MainNavigatorParamList>;
