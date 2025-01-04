// src/screens/CreateInvoiceScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateInvoiceScreen = ({ navigation }: any) => {
  const [clientName, setClientName] = useState('');
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = useState('');

  const handleCreateInvoice = () => {
   const pixKey = 'example-pix-key-123'; // Simule a chave Pix
   navigation.navigate('InvoiceDetails', {
     clientName,
     productName,
     amount: parseFloat(amount),
     pixKey,
   });
 };
 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Input label="Nome do Cliente" value={clientName} onChangeText={setClientName} />
      <Input label="Produto/Serviço" value={productName} onChangeText={setProductName} />
      <Input
        label="Valor (R$)"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Criar Cobrança" onPress={handleCreateInvoice} />
      <Button title="Cancelar" onPress={() => navigation.goBack()} mode="text" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default CreateInvoiceScreen;
