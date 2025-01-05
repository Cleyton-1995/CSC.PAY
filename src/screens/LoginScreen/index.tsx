import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { COLORS } from "../../themes/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ActivityIndicator } from "react-native-paper";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = "O email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "O email não é válido.";
    }

    if (!password) {
      newErrors.password = "A senha é obrigatória.";
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("Home");
      }, 2000); // Simulação de carregamento de 2 segundos
    } else {
      Alert.alert("Erro", "Por favor, corrija os erros no formulário.");
    }
  };

  function handleRegister() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Signup");
    }, 2000); // Simulação de carregamento de 2 segundos
  }

  function handleForgotPassword() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("ForgotPassword");
    }, 2000); // Simulação de carregamento de 2 segundos
  }

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.BLUE_500} />
        </View>
      )}

      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/cscpay.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.title}>Acesse sua Conta</Text>

        <Input
          keyboardType="email-adress"
          label="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => {
            if (text.length <= 50) {
              setEmail(text);
              if (errors.email) {
                setErrors({ ...errors, email: undefined });
              }
            }
          }}
          errorMessage={errors.email}
        />
        <Input
          label="Senha"
          value={password}
          onChangeText={(text) => {
            if (text.length <= 20) {
              setPassword(text);
              if (errors.password) {
                setErrors({ ...errors, password: undefined });
              }
            }
          }}
          secureTextEntry
          errorMessage={errors.password}
        />
        <Button
          buttonStyle={styles.button}
          title="Esqueci minha senha"
          onPress={handleForgotPassword}
          mode="text"
          backgroundColor={COLORS.WHITE}
          textColor={COLORS.BLUE_500}
        />

        <Button title="Entrar" onPress={handleLogin} />

        <Button
          backgroundColor={COLORS.GRAY_QUINTENAY}
          textColor={COLORS.BLUE_500}
          title="Cadastrar-se"
          onPress={handleRegister}
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
    paddingTop: getStatusBarHeight() + 17,
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
    fontSize: 25,
    fontWeight: "bold",
    top: -10,
  },

  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default LoginScreen;
