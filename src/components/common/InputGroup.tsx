/* eslint-disable react-native/no-inline-styles */


import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { style } from '../../styles/Style';
import { InputProps } from '../../types/PropsType';

const InputGroup:React.FC<InputProps> = ({label, password,isPhone}) => {

  return (
    <View style={{marginBottom:20}}>
      <Text style={style.label}>{label}</Text>
      <View style={style.textField}>
        <TextInput style={{padding:0}} secureTextEntry={password} keyboardType={isPhone?"phone-pad":"default"}/>
      </View>
    </View>
  );
};

export default InputGroup;
