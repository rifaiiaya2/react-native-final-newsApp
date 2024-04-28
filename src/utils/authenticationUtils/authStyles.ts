import {StyleSheet} from 'react-native';

export const authStyle = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 0,
  },
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    position: 'relative',
  },
  topImageContainer: {
    height: 70,
  },
  topImage: {
    width: '100%',
    height: 130,
  },
  textView: {
    paddingVertical: 18,
    marginTop: 40,
  },
  halfTopImage: {
    width: '100%',
    height: 125,
  },
  helloText: {
    textAlign: 'center',
    fontSize: 65,
    fontWeight: '500',
    color: '#262626',
  },
  goodByeText: {
    paddingTop: 90,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 110,
    color: '#d17383',
  },
  signInText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#262626',
    marginBottom: 25,
  },
  errorsStyle: {
    color: 'red',
  },
  createAccountTxt: {
    textAlign: 'center',
    fontSize: 30,
    color: '#262626',
    marginTop: 80,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#FFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 20,
    alignItems: 'center',
    height: 50,
  },
  inputIcon: {
    width: 26,
    height: 26,
    marginLeft: 15,
  },
  textInput: {
    flex: 1,
    marginLeft: 7,
    fontSize: 18,
    color: '#262626',
  },
  signInButtonContainer: {
    flexDirection: 'row',
    marginTop: 70,
    width: '92%',
    justifyContent: 'flex-end',
  },
  signIn: {
    color: '#262626',
    fontSize: 25,
    fontWeight: 'bold',
  },
  linearGradient: {
    height: 35,
    width: 56,
    borderRadius: 17,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  footerText: {
    color: '#262626',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 100,
    marginLeft: 24,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  signText: {
    fontWeight: '900',
    fontSize: 20,
  },
  leftVectorContainer: {
    position: 'absolute',
    bottom: -34,
    left: -70,
  },
  leftVectorContainerSignUp: {
    position: 'absolute',
    bottom: -23,
    left: -43,
  },

  leftVectorImage: {
    width: 210,
    height: 275,
    resizeMode: 'contain',
  },
  leftVectorImageSignUp: {
    width: 220,
    height: 275,
    resizeMode: 'contain',
  },
});
