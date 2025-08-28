import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText, { AppTextBlack } from "../components/AppText";

export default function Index() {
  const router = useRouter();

  return (
    <LinearGradient colors={["#0a0f0a", "#12331a", "#153a26"]} style={styles.bg}>
      <SafeAreaView style={styles.container}>
        <Ionicons
          name="fitness-outline"
          size={120}
          color="#2ddb7f"
          style={{ marginBottom: -10 }}
        />

        <AppTextBlack style={styles.title}>CaloriZen</AppTextBlack>
        <AppText style={styles.subtitle}>Your personal calorie guide</AppText>

        <Pressable
          style={styles.circleButton}
          onPress={() => router.push("/input")}
        >
          <Ionicons name="arrow-forward" size={40} color="#042012" />
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 44, color: "#2ddb7f", marginBottom: -20 },
  subtitle: {
    fontSize: 12,
    color: "#a6d7aa",
    marginBottom: 100,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  circleButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#2ddb7f",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#2ddb7f",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 10,
  },
});
