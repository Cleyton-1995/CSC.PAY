// src/navigation/AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Register } from "../screens/Register";
import { Login } from "../screens/Login";

const Stack = createStackNavigator();

function AppNavigator() {
  console.log("AppNavigator carregado");
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login"
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
