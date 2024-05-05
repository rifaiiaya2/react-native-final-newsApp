import React from 'react';
import {View, Image, TextInput, TextInputProps} from 'react-native';
import {authStyle} from '../../services/authentication/authStyles';

interface IFormikTextInputProps extends TextInputProps {
  icon?: any;
  name: string;
}

const CustomTextInput = ({icon, ...props}: IFormikTextInputProps) => {
  return (
    <View style={authStyle.inputContainer}>
      {icon && <Image source={icon} style={authStyle.inputIcon} />}
      <TextInput style={authStyle.textInput} {...props} />
    </View>
  );
};

export default CustomTextInput;
