import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from "../../components/Button";
import { launchImageLibrary } from "react-native-image-picker";
import { ActivityIndicator, IconButton } from "react-native-paper";
import { COLORS } from "../../themes/colors";
import { BackButton } from "../../components/BackButton";
import { AntDesign, Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const HomeScreen = ({ navigation }: any) => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const balance = 1250.75;

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (
        !response.didCancel &&
        response.assets &&
        response.assets.length > 0
      ) {
        const uri = response.assets[0].uri || null;
        setUserImage(uri);
      }
    });
  };

  function handleProfile() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("UserProfile");
    }, 2000);
  }

  function LogOut() {
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
          source={require("../../assets/cscpay.png")}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.icon} onPress={LogOut}>
        <Feather name="log-out" size={20} color={COLORS.BLUE_500} />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleProfile} style={styles.imageContainer}>
          {userImage ? (
            <Image source={{ uri: userImage }} style={styles.userImage} />
          ) : (
            <Text style={styles.imagePlaceholder}>D</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.title}>Olá, Dan!</Text>
      </View>

      {/* <Button title="Tela do Usuário" onPress={handleProfile} /> */}
      <View style={styles.contant}>
        <View style={styles.contentBalance} >
          <Text style={styles.balanceLabel}>Saldo disponível:</Text>
          <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
        </View>

        <View style={styles.mainContainer}>
          <Button
            buttonStyle={{
              height: 130,
              width: 130,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
            }}
            title="Criar Cobrança"
            onPress={() => navigation.navigate("CreateInvoice")}
          />
          <Button
            buttonStyle={{
              height: 130,
              width: 130,
              marginHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            title="Lista de Clientes"
            onPress={() => navigation.navigate("ClientsList")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    paddingTop: getStatusBarHeight() + 17,
  },

  mainContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    paddingVertical: 20,
    top: -20,
    justifyContent: "center",
  },

  contant: {
    flex: 1,
    top: 150,
  },

  contentBalance: {
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    marginVertical: 30,
    justifyContent: "center",
    paddingVertical: 30,
    marginBottom: 30,
    borderRadius: 5 
  },

  balanceLabel: {
    fontSize: 18,
    marginBottom: 10,
  },

  balance: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 60,
    backgroundColor: COLORS.BLUE_500,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  imagePlaceholder: {
    fontSize: 20,
    color: COLORS.WHITE,
  },

  img: {
    flex: 1,
    width: 150,
    position: "absolute",
    height: 150,
    alignSelf: "center",
  },

  imgContainer: {
    top: 0,
  },

  title: {
    color: COLORS.BLUE_500,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
  },

  headerContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    top: 150,
  },

  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  icon: {
    backgroundColor: COLORS.WHITE,
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 195,
    fontWeight: "bold",
    flex: 1,
    alignSelf: "flex-end",
    right: 20,
  },
});

export default HomeScreen;
