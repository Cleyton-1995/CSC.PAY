import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Lógica para recuperação de senha
    console.log('Recuperação de senha para:', email);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Button title="Enviar link de recuperação" onPress={handleResetPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default ForgotPasswordScreen;