import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
export type MainNavigatorParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  Feeds: undefined;
  SplashScreen: undefined;
  DetailsFeedsScreen: {
    item: {
      _id: string;
      title: string;
      image_url: string;
      keywords: string[] | null;
      description: string;
      source_url: string;
      source_icon: string;
      pubDate: string;
    };
  };
};

export type MainNavigatorNavigationProp =
  NativeStackNavigationProp<MainNavigatorParamList>;
