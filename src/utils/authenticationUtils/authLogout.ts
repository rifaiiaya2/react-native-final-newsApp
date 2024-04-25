import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {clearAuthToken} from '../../redux/slices/authSlice';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';

const useAuthLogout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<MainNavigatorNavigationProp>();

  const logout = useCallback(() => {
    dispatch(clearAuthToken());
    navigation.reset({
      routes: [{name: 'LoginScreen'}],
    });
  }, [dispatch, navigation]);

  return logout;
};

export default useAuthLogout;
