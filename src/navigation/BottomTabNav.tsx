import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from '../screens/FeedsScreen';
import {Image} from 'react-native';
import {getPlatformIcon} from '../utils/platformIcons';
import LogoutScreen from '../screens/authScreens/LogoutScreen';
import DetailFeedsScreen from '../screens/DetailNewsScreen';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="FeedsScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e3ab3f',
        tabBarInactiveTintColor: '#918a86',
        headerShown: false,
      }}>
      <Tab.Screen
        name="FeedsScreen"
        component={FeedsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: () => (
            <Image
              source={getPlatformIcon('feeds')}
              style={{
                width: 48,
                height: 38,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailFeedsScreen}
        options={{
          tabBarItemStyle: {height: 0},
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarLabel: 'Sign-Out',
          tabBarIcon: () => (
            <Image
              source={getPlatformIcon('logout')}
              style={{
                width: 48,
                height: 40,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNav;
