import {Platform} from 'react-native';

type IconName = 'feeds' | 'logout';

const icons = {
  'ios-feeds': require('../assets/icons/ios-feeds.png'),
  'android-feeds': require('../assets/icons/android-feeds.png'),
  'ios-logout': require('../assets/icons/ios-logout.png'),
  'android-logout': require('../assets/icons/android-logout.png'),
};

export const getPlatformIcon = (iconName: IconName) => {
  const prefix = Platform.OS === 'ios' ? 'ios-' : 'android-';
  return icons[`${prefix}${iconName}` as keyof typeof icons];
};
