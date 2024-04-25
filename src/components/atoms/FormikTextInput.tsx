import React from 'react';
import {View, Image, TextInput, TextInputProps} from 'react-native';
import {authStyle} from '../../utils/authenticationUtils/authStyles';

interface IFormikTextInputProps extends TextInputProps {
  icon?: any;
  name: string;
}

const FormikTextInput = ({icon, ...props}: IFormikTextInputProps) => {
  return (
    <View style={authStyle.inputContainer}>
      {icon && <Image source={icon} style={authStyle.inputIcon} />}
      <TextInput style={authStyle.textInput} {...props} />
    </View>
  );
};

export default FormikTextInput;
