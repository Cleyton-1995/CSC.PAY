import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  icon: {
      backgroundColor: COLORS.WHITE,
      color: COLORS.BLUE_500,
      fontSize: 30,
      fontFamily: FONTS.BOLD,
      height: 40,
      width: 40,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
});