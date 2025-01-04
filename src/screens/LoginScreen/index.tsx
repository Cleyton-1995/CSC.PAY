import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { COLORS } from "../../themes/colors";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para autenticação
    console.log("Login com:", email, password);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/pagarme.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.title}>Acesse sua Conta</Text>

        <Input
          keyboardType="email-adress"
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          buttonStyle={styles.button}
          title="Esqueci minha senha"
          onPress={() => navigation.navigate("ForgotPassword")}
          mode="text"
          backgroundColor={COLORS.WHITE}
          textColor={COLORS.BLUE_500}
        />

        <Button title="Entrar" onPress={handleLogin} />

        <Button
          backgroundColor={COLORS.GRAY_QUINTENAY}
          textColor={COLORS.BLUE_500}
          title="Cadastrar-se"
          onPress={() => navigation.navigate("Signup")}
          mode="text"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  button: {
    display: "flex",
    alignSelf: "flex-end",
    marginHorizontal: 5,
    paddingBottom: -20,
    paddingTop: -20,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.BLUE_500,
    borderRadius: 0,
    top: -10,
  },

  img: {
    flex: 1,
    width: 150,
    position: "absolute",
    height: 150,
    alignSelf: "center",
  },

  imgContainer: {
    top: -150,
  },

  mainContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 20,
  },

  title: {
    color: COLORS.BLUE_500,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    top: -10,
  },
});

export default LoginScreen;
