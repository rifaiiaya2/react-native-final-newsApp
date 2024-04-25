import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from '../screens/FeedsScreen';
import {Image} from 'react-native';
import {getPlatformIcon} from '../utils/platformIcons';
import LogoutScreen from '../screens/authScreens/LogoutScreen';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="FeedsScreen"
      screenOptions={{
        tabBarActiveTintColor: '#de9b52',
        tabBarInactiveTintColor: '#725b41',
        headerShown: false,
      }}>
      <Tab.Screen
        name="FeedsScreen"
        component={FeedsScreen}
        options={{
          tabBarLabel: 'Feeds',
          tabBarIcon: () => (
            <Image
              source={getPlatformIcon('feeds')}
              style={{
                width: 45,
                height: 32,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: () => (
            <Image
              source={getPlatformIcon('logout')}
              style={{
                width: 45,
                height: 32,
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
