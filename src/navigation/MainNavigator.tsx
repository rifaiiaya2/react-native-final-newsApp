import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorParamList} from './Main.Navigator.types';
import LoginScreen from '../screens/authScreens/LoginScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import BottomTabNav from './BottomTabNav';
import DetailFeedsScreen from '../screens/DetailNewsScreen';

const MainNavigator = () => {
  const MainStackNavigator =
    createNativeStackNavigator<MainNavigatorParamList>();
  return (
    <MainStackNavigator.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStackNavigator.Screen name="SplashScreen" component={SplashScreen} />
      <MainStackNavigator.Screen name="LoginScreen" component={LoginScreen} />
      <MainStackNavigator.Screen name="SignUpScreen" component={SignUpScreen} />
      <MainStackNavigator.Screen
        name="DetailsFeedsScreen"
        component={DetailFeedsScreen}
      />
      <MainStackNavigator.Screen name="Feeds" component={BottomTabNav} />
    </MainStackNavigator.Navigator>
  );
};
export default MainNavigator;
