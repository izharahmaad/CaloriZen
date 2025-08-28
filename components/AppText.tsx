import React from "react";
import { Text, TextProps } from "react-native";

export default function AppText(props: TextProps) {
  return <Text {...props} style={[{ fontFamily: "Poppins_400Regular" }, props.style]} />;
}

export function AppTextBold(props: TextProps) {
  return <Text {...props} style={[{ fontFamily: "Poppins_700Bold" }, props.style]} />;
}

export function AppTextBlack(props: TextProps) {
  return <Text {...props} style={[{ fontFamily: "Poppins_900Black" }, props.style]} />;
}
