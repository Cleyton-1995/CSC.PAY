import React from "react";
import { Button as PaperButton } from "react-native-paper";

interface ButtonProps {
  title: string;
  onPress: () => void;
  mode?: "text" | "outlined" | "contained";
  backgroundColor?: string;
  textColor?: string;
  buttonStyle?: StyleProp<ViewStyle>
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  mode = "contained",
  backgroundColor = "#0f29fc", // Cor padrão para o fundo
  textColor = "#FFFFFF",
  buttonStyle
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, buttonStyle, { backgroundColor }]}
    >
      <Text style={[styles.label, { color: textColor }]} >{title}</Text>
    </TouchableOpacity>
  );
};

import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
    paddingBottom: 15,
    paddingTop: 15,
  },

  label: {
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    textAlign: "center",
  },
});

export default Button;
