import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";

import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../themes/colors";

interface ButtonProps {
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
}
export function BackButton({ onPress, buttonStyle }: ButtonProps) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.icon, buttonStyle]}
      >
        <AntDesign name="left" size={15} color={COLORS.BLUE_500} />
      </TouchableOpacity>
    </>
  );
}
