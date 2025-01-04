import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { COLORS } from "../../themes/colors";

const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Lógica para cadastro de usuários
    console.log("Cadastro de usuário:", name, phone, email, password);
    navigation.navigate("Login");
  };

  function backLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/pagarme.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.headerContainer}>
        <BackButton onPress={backLogin} />
        <Text style={styles.title}>Cadastre-se</Text>
      </View>

      <View style={styles.mainContainer}>
        <Input label="Nome" value={name} onChangeText={setName} />
        <Input label="Telefone" value={phone} onChangeText={setPhone} />
      </View>

      <View style={styles.mainContainer}>
        <Input label="Email" value={email} onChangeText={setEmail} />
        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Button
        title="Cadastrar"
        onPress={handleRegister}
        buttonStyle={{ top: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },

  title: {
    color: COLORS.BLUE_500,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
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
    top: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 20,
    marginBottom: 20,
  },
});

export default RegisterScreen;
