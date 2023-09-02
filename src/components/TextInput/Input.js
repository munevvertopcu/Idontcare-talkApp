import React from 'react';
import {TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
