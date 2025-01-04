import React from 'react';
import { TextInput } from 'react-native-paper';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChangeText, secureTextEntry = false, keyboardType }) => {
  return (
    <TextInput
      style={styles.container}
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      mode="outlined"
    />
  );
};

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
  }
});

export default Input;