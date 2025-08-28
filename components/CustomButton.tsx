import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function CustomButton({ label, icon, onPress }: Props) {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <LinearGradient
        colors={["#2ddb7f", "#23b56c"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        {icon && <Ionicons name={icon} size={22} color="#042012" />}
        <Text style={styles.text}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    overflow: "hidden",
    marginTop: 20,
    shadowColor: "#2ddb7f",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  button: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 16,
  },
  text: {
    color: "#042012",
    fontSize: 18,
    fontWeight: "900",
  },
});
