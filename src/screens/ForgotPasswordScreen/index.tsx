import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { COLORS } from "../../themes/colors";
import { BackButton } from "../../components/BackButton";
import { ActivityIndicator } from "react-native-paper";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: {
      email?: string;
    } = {};

    if (!email) {
      newErrors.email = "Digite um email válido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "O email não é válido.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function backLogin() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Login");
    }, 2000); // Simulação de carregamento de 2 segundos
  }

  const handleResetPassword = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Alert.alert("Sucesso", "Email enviado.", [
          {
            text: "OK",
            onPress: () => navigation.navigate("Login"),
          },
        ]);
      }, 2000); // Simulação de carregamento de 2 segundos
    } else {
      Alert.alert("Erro", "Por favor, corrija os erros no formulário.");
    }
  };

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

      <View style={styles.headerContainer}>
        <BackButton onPress={backLogin} />
        <Text style={styles.title}>Recuperar Senha</Text>
      </View>

      <View style={styles.mainContainer}>
        <Input
          label="Email"
          value={email}
          keyboardType="email-adress"
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
        <Button
          title="Enviar link de recuperação"
          onPress={handleResetPassword}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 17,
  },

  mainContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 20,
    top: -20,
  },

  img: {
    flex: 1,
    width: 150,
    position: "absolute",
    height: 150,
    alignSelf: "center",
  },

  imgContainer: {
    top: -250,
  },

  title: {
    color: COLORS.BLUE_500,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    top: -50,
  },

  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default ForgotPasswordScreen;
