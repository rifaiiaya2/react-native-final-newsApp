import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../components/atoms/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';
import {authStyle} from '../../services/authentication/authStyles';
import {useDispatch} from 'react-redux';
import {setAuthToken} from '../../redux/slices/authSlice';
import {signupUser} from '../../services/authentication/authServices';
import GradientStatusBar from '../../components/atoms/GradientStatusBar';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
const SignUpScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const dispatch = useDispatch();
  const handleToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const handleSignUpSuccess = (tokens: {
    accessToken: string;
    refreshToken: string;
  }) => {
    dispatch(setAuthToken(tokens));
    navigation.navigate('Feeds');
    setIsLoading(false);
  };

  const handleSignUpFailure = (error: any) => {
    console.error('Signup failed:', error);
  };
  return (
    <Formik
      initialValues={{username: '', email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={values =>
        signupUser(values, handleSignUpSuccess, handleSignUpFailure)
      }>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <ScrollView contentContainerStyle={authStyle.scrollContainer}>
          <GradientStatusBar />

          <View style={authStyle.container}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <>
                <View style={authStyle.topImageContainer}>
                  <Image
                    source={require('../../assets/images/topVector.png')}
                    style={authStyle.halfTopImage}
                  />
                </View>
                <View>
                  <Text style={authStyle.createAccountTxt}>Create account</Text>
                </View>
                <CustomTextInput
                  name="username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  placeholder="Username"
                  placeholderTextColor="#9a9a9a"
                  icon={require('../../assets/icons/user.png')}
                />
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
                  <Text style={authStyle.signIn}>Create !</Text>

                  <LinearGradient
                    colors={['#F97794', '#623AA2']}
                    style={authStyle.linearGradient}>
                    <Image
                      source={require('../../assets/icons/arrowRight.png')}
                      style={authStyle.inputIcon}
                    />
                  </LinearGradient>
                </Pressable>
              </>
            )}
            <Text style={authStyle.footerText}>
              Already have an account?
              <Text onPress={handleToLogin} style={authStyle.signText}>
                Log-In
              </Text>
            </Text>
            <View style={authStyle.leftVectorContainerSignUp}>
              <Image
                source={require('../../assets/images/leftVector.png')}
                style={authStyle.leftVectorImageSignUp}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default SignUpScreen;
