import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../components/atoms/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';
import {authStyle} from '../../services/authentication/authStyles';
import {useDispatch} from 'react-redux';
import {setAuthToken} from '../../redux/slices/authSlice';
import {loginUser} from '../../services/authentication/authServices';
import GradientStatusBar from '../../components/atoms/GradientStatusBar';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
const LoginScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const dispatch = useDispatch();

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
        <ScrollView contentContainerStyle={authStyle.scrollContainer}>
          <GradientStatusBar />
          <View style={authStyle.container}>
            <View style={authStyle.topImageContainer}>
              <Image
                source={require('../../assets/images/topVector.png')}
                style={authStyle.topImage}
              />
            </View>
            <View style={authStyle.textView}>
              <Text style={authStyle.helloText}>Hello</Text>
            </View>
            <View>
              <Text style={authStyle.signInText}>Sign in to your account</Text>
            </View>
            <CustomTextInput
              name="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder=" User Email"
              placeholderTextColor="#9a9a9a"
              icon={require('../../assets/icons/userEmail.png')}
            />
            {touched.email && errors.email && (
              <Text style={authStyle.errorsStyle}>{errors.email}</Text>
            )}
            <CustomTextInput
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
              <Text style={authStyle.errorsStyle}>{errors.password}</Text>
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
              <Text onPress={handleToSignUp} style={authStyle.signText}>
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
