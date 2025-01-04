import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";

const HomeScreen = ({ navigation }: any) => {
  const balance = 1250.75;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.balanceLabel}>Saldo disponível:</Text>
      <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
      <Button
        title="Criar Cobrança"
        onPress={() => navigation.navigate("CreateInvoice")}
      />
      <Button
        title="Lista de Clientes"
        onPress={() => navigation.navigate("ClientsList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  balanceLabel: {
    fontSize: 18,
    marginBottom: 10,
  },

  balance: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#4CAF50",
  },
});

export default HomeScreen;
