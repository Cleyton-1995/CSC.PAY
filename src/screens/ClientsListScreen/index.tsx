// src/screens/ClientsListScreen.tsx
import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';

const ClientsListScreen = ({ navigation }: any) => {
  const [clients, setClients] = useState([
    { id: '1', name: 'João Silva', status: 'Pago' },
    { id: '2', name: 'Maria Oliveira', status: 'Não Pago' },
  ]);

  const handleDeleteClient = (id: string) => {
    setClients(prevClients => prevClients.filter(client => client.id !== id));
  };

  const renderClient = ({ item }: any) => (
    <View style={styles.clientCard}>
      <Text style={styles.clientName}>{item.name}</Text>
      <Text style={styles.clientStatus}>
        Status: {item.status === 'Pago' ? '✅' : '❌'}
      </Text>
      <Button
        title="Excluir"
        onPress={() => handleDeleteClient(item.id)}
        mode="text"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={clients}
        renderItem={renderClient}
        keyExtractor={item => item.id}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} mode="text" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  clientCard: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  clientName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clientStatus: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default ClientsListScreen;
