import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormikTextInput from '../../components/atoms/FormikTextInput';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';
import {authStyle} from '../../utils/authenticationUtils/authStyles';
import {useDispatch} from 'react-redux';
import {setAuthToken} from '../../redux/slices/authSlice';
import {loginUser} from '../../utils/authenticationUtils/authServices';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
const LoginScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const dispatch = useDispatch();
  // const loginUser = async (values: ILoginFormValues) => {
  //   try {
  //     const response = await axios.post(
  //       'https://backend-practice.euriskomobility.me/login',
  //       values,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );
  //     console.log('Data getted successfully:', response.data);
  //     if (response.status === 200) {
  //       dispatch(setAuthToken(response.data.accessToken));
  //       navigation.navigate('HomeScreen');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleLoginSuccess = (token: {
    accessToken: string;
    refreshToken: string;
  }) => {
    dispatch(setAuthToken(token));
    navigation.navigate('Feeds');
  };

  const handleLoginFailure = (error: any) => {
    console.error('Login failed:', error);
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={values =>
        loginUser(values, handleLoginSuccess, handleLoginFailure)
      }>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 0}}>
          <StatusBar translucent={true} backgroundColor="transparent" />
          <LinearGradient
            colors={['#e9be27', '#de9b52', '#d7856d', '#e3ab3f']}
            style={{
              height: StatusBar.currentHeight,
            }}
          />
          <View style={authStyle.container}>
            <View style={authStyle.topImageContainer}>
              <Image
                source={require('../../assets/images/topVector.png')}
                style={authStyle.topImage}
              />
            </View>
            <View style={{paddingVertical: 18, marginTop: 40}}>
              <Text style={authStyle.helloText}>Hello</Text>
            </View>
            <View>
              <Text style={authStyle.signInText}>Sign in to your account</Text>
            </View>
            <FormikTextInput
              name="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder=" User Email"
              placeholderTextColor="#9a9a9a"
              icon={require('../../assets/icons/userEmail.png')}
            />
            {touched.email && errors.email && (
              <Text style={{color: 'red'}}>{errors.email}</Text>
            )}
            <FormikTextInput
              name="password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="User Password"
              placeholderTextColor="#9a9a9a"
              secureTextEntry={true}
              icon={require('../../assets/icons/userPassword.png')}
            />
            {touched.password && errors.password && (
              <Text style={{color: 'red'}}>{errors.password}</Text>
            )}

            <Pressable
              onPress={() => {
                handleSubmit();
              }}
              style={authStyle.signInButtonContainer}>
              <Text style={authStyle.signIn}>Sign In</Text>

              <LinearGradient
                colors={['#F97794', '#623AA2']}
                style={authStyle.linearGradient}>
                <Image
                  source={require('../../assets/icons/arrowRight.png')}
                  style={authStyle.inputIcon}
                />
              </LinearGradient>
            </Pressable>

            <Text style={authStyle.footerText}>
              Don't have an account?
              <Text
                onPress={handleToSignUp}
                style={{fontWeight: '900', fontSize: 20}}>
                Sign-Up
              </Text>
            </Text>
            <View style={authStyle.leftVectorContainer}>
              <Image
                source={require('../../assets/images/leftVector.png')}
                style={authStyle.leftVectorImage}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default LoginScreen;
