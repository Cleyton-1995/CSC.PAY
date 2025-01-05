import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { COLORS } from "../../themes/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ActivityIndicator } from "react-native-paper";

const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    phone?: string;
    name?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: {
      email?: string;
      password?: string;
      phone?: string;
      name?: string;
    } = {};

    if (!name) {
      newErrors.name = "O nome é obrigatório.";
    } else if (name.length < 3) {
      newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
    }

    if (!phone) {
      newErrors.phone = "O número de telefone é obrigatório.";
    } else if (phone.length < 11) {
      newErrors.phone =
        "O número de telefone deve ter pelo menos 11 caracteres.";
    }

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

  const handleRegister = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Alert.alert("Sucesso", "Cadastro realizado.", [
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

  function backLogin() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Login");
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
          source={require("../../assets/pagarme.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.headerContainer}>
        <BackButton onPress={backLogin} />
        <Text style={styles.title}>Cadastre-se</Text>
      </View>

      <View style={styles.mainContainer}>
        <Input
          label="Nome"
          value={name}
          onChangeText={(text) => {
            if (text.length <= 50) {
              setName(text);
              if (errors.name) {
                setErrors({ ...errors, name: undefined });
              }
            }
          }}
          errorMessage={errors.name}
        />
        <Input
          label="Telefone"
          value={phone}
          keyboardType="name-phone-pad"
          onChangeText={(text) => {
            if (text.length <= 11) {
              setPhone(text);
              if (errors.phone) {
                setErrors({ ...errors, phone: undefined });
              }
            }
          }}
          errorMessage={errors.phone}
        />
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
    paddingTop: getStatusBarHeight() + 17,
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
    top: -120,
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

  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default RegisterScreen;
