import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = { value: string; onChange: (v: string) => void };

export default function ActivityChips({ value, onChange }: Props) {
  const activities = [
    { key: "sedentary", label: "Sedentary", icon: "tv-outline" },
    { key: "light", label: "Light", icon: "walk-outline" },
    { key: "moderate", label: "Moderate", icon: "bicycle-outline" },
    { key: "active", label: "Active", icon: "barbell-outline" },
  ];

  return (
    <View style={styles.row}>
      {activities.map((a) => {
        const active = value === a.key;
        return (
          <Pressable
            key={a.key}
            onPress={() => onChange(a.key)}
            style={[styles.chip, active && styles.chipActive]}
          >
            <Ionicons
              name={a.icon as any}
              size={18}
              color={active ? "#042012" : "#a6d7aa"}
            />
            <Text style={[styles.chipText, active && { color: "#042012" }]}>
              {a.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginVertical: 10 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#101810",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  chipActive: {
    backgroundColor: "#2ddb7f",
    shadowColor: "#2ddb7f",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 6,
  },
  chipText: { color: "#a6d7aa", fontWeight: "700" },
});
