import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  value: string;
  onChangeText: (t: string) => void;
  placeholder: string;
  icon?: keyof typeof Ionicons.glyphMap;
  keyboardType?: "default" | "numeric";
  multiline?: boolean;
};

export default function InputField({ value, onChangeText, placeholder, icon, keyboardType = "default", multiline }: Props) {
  return (
    <View style={styles.wrapper}>
      {icon && <Ionicons name={icon} size={22} color="#2ddb7f" style={{ marginRight: 10 }} />}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#777"
        keyboardType={keyboardType}
        multiline={multiline}
        style={[styles.input, multiline && { height: 80, textAlignVertical: "top" }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#101810",
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    paddingVertical: 14,
  },
});
