import React, { useState } from "react";
import { HelperText, TextInput } from "react-native-paper";

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType,
  errorMessage,
  autoCapitalize
}) => {
  const [password, setPassword] = useState(secureTextEntry);
  return (
    <>
      <TextInput
        style={styles.container}
        label={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        mode="outlined"
        error={!!errorMessage}
        autoCapitalize={autoCapitalize}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setPassword(!password)}>
          <Text style={styles.toggleText}>
            {password ? (
              <Ionicons name="eye-off" color="#8D8D99" size={20} />
            ) : (
              <Ionicons name="eye" color="#8D8D99" size={20} />
            )}
          </Text>
        </TouchableOpacity>
      )}
      {errorMessage && <HelperText type="error">{errorMessage}</HelperText>}
    </>
  );
};

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  toggleText: {
    flex: 1,
    position: "absolute",
    top: -45,
    right: 15,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default Input;
