import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CreateInvoiceScreen from "./src/screens/CreateInvoiceScreen";
import ClientsListScreen from "./src/screens/ClientsListScreen";
import InvoiceDetailsScreen from "./src/screens/InvoiceDetailsScreen";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={RegisterScreen}
          options={{ title: "Cadastrar Usuário" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: "Esqueci Minha Senha" }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{ title: "Perfil do Usuário" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="CreateInvoice"
          component={CreateInvoiceScreen}
          options={{ title: "Criar Cobrança" }}
        />
        <Stack.Screen
          name="ClientsList"
          component={ClientsListScreen}
          options={{ title: "Listagem de Clientes" }}
        />
        <Stack.Screen name="InvoiceDetails" component={InvoiceDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
    paddingTop: getStatusBarHeight() + 17,
  },
});
