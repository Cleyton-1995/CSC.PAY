// src/screens/InvoiceDetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Linking from 'expo-linking';
import Button from '../../components/Button';

const InvoiceDetailsScreen = ({ route, navigation }: any) => {
  const { clientName, productName, amount, pixKey } = route.params;

  const handleShareWhatsApp = () => {
    const message = `Olá ${clientName},\n\nSegue o extrato da sua cobrança:\nProduto/Serviço: ${productName}\nValor: R$ ${amount.toFixed(
      2
    )}\n\nChave Pix para pagamento: ${pixKey}`;
    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() => {
      console.log('WhatsApp não instalado.');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Cobrança</Text>
      <Text style={styles.detail}>Cliente: {clientName}</Text>
      <Text style={styles.detail}>Produto/Serviço: {productName}</Text>
      <Text style={styles.detail}>Valor: R$ {amount.toFixed(2)}</Text>
      <Text style={styles.detail}>Chave Pix: {pixKey}</Text>
      <Image
        source={{
          uri: `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=pix%3A%2F%2F${pixKey}&choe=UTF-8`,
        }}
        style={styles.qrCode}
      />
      <Button title="Compartilhar via WhatsApp" onPress={handleShareWhatsApp} />
      <Button title="Voltar" onPress={() => navigation.goBack()} mode="text" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

export default InvoiceDetailsScreen;
