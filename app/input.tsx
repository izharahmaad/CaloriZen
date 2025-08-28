import React, { useState } from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserInput } from "../src/types/user";
import AppText, { AppTextBold, AppTextBlack } from "../components/AppText";

export default function Input() {
  const router = useRouter();

  const [user, setUser] = useState<UserInput>({
    gender: "male",
    age: "",
    weight: "",
    weightUnit: "kg",
    height: "",
    heightUnit: "cm",
    notes: "",
    activity: "moderate",
  });

  const update = (key: keyof UserInput, value: any) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const next = () => {
    router.push({ pathname: "/goal", params: { ...user } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppTextBlack style={styles.title}>Your Info</AppTextBlack>

      {/* Gender */}
      <View style={styles.row}>
        <Pressable
          style={[styles.genderBtn, user.gender === "male" && styles.active]}
          onPress={() => update("gender", "male")}
        >
          <Ionicons
            name="male-outline"
            size={22}
            color={user.gender === "male" ? "#042012" : "#a6d7aa"}
          />
          <AppTextBold
            style={[styles.genderText, user.gender === "male" && { color: "#042012" }]}
          >
            Male
          </AppTextBold>
        </Pressable>
        <Pressable
          style={[styles.genderBtn, user.gender === "female" && styles.active]}
          onPress={() => update("gender", "female")}
        >
          <Ionicons
            name="female-outline"
            size={22}
            color={user.gender === "female" ? "#042012" : "#a6d7aa"}
          />
          <AppTextBold
            style={[styles.genderText, user.gender === "female" && { color: "#042012" }]}
          >
            Female
          </AppTextBold>
        </Pressable>
      </View>

      {/* Age */}
      <View style={styles.inputWrapper}>
        <Ionicons name="calendar-outline" size={20} color="#2ddb7f" />
        <TextInput
          placeholder="Age (years)"
          placeholderTextColor="#777"
          value={user.age}
          onChangeText={(v) => update("age", v)}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      {/* Weight */}
      <View style={styles.inputWrapper}>
        <Ionicons name="barbell-outline" size={20} color="#2ddb7f" />
        <TextInput
          placeholder={`Weight (${user.weightUnit})`}
          placeholderTextColor="#777"
          value={user.weight}
          onChangeText={(v) => update("weight", v)}
          style={styles.input}
          keyboardType="numeric"
        />
        <Pressable
          onPress={() =>
            update("weightUnit", user.weightUnit === "kg" ? "lb" : "kg")
          }
        >
          {/* 🔥 Changed color here */}
          <AppTextBold style={styles.toggle}>
            {user.weightUnit.toUpperCase()}
          </AppTextBold>
        </Pressable>
      </View>

      {/* Height */}
      <View style={styles.inputWrapper}>
        <Ionicons name="accessibility-outline" size={20} color="#2ddb7f" />
        <TextInput
          placeholder={`Height (${user.heightUnit})`}
          placeholderTextColor="#777"
          value={user.height}
          onChangeText={(v) => update("height", v)}
          style={styles.input}
          keyboardType="numeric"
        />
        <Pressable
          onPress={() =>
            update("heightUnit", user.heightUnit === "cm" ? "ft" : "cm")
          }
        >
          {/* 🔥 Changed color here */}
          <AppTextBold style={styles.toggle}>
            {user.heightUnit.toUpperCase()}
          </AppTextBold>
        </Pressable>
      </View>

      {/* Notes */}
      <View style={[styles.inputWrapper, { height: 100 }]}>
        <Ionicons name="create-outline" size={20} color="#2ddb7f" />
        <TextInput
          placeholder="Notes / Goals (Optional)"
          placeholderTextColor="#777"
          value={user.notes}
          onChangeText={(v) => update("notes", v)}
          style={[styles.input, { height: "100%", textAlignVertical: "top" }]}
          multiline
        />
      </View>

      {/* Next Button */}
      <Pressable style={styles.circleButton} onPress={next}>
        <Ionicons name="arrow-forward" size={30} color="#042012" />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0f0a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 28, color: "#2ddb7f", marginBottom: 20 },
  row: { flexDirection: "row", gap: 14, marginBottom: 20 },
  genderBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 14,
    borderRadius: 40,
    backgroundColor: "#101810",
  },
  active: { backgroundColor: "#2ddb7f" },
  genderText: { color: "#a6d7aa" },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#101810",
    borderRadius: 40,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    width: "100%",
  },
  input: {
    flex: 1,
    color: "#fff",
    padding: 14,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  toggle: {
    color: "#eaffea", // 🔥 changed from dark to light
    marginLeft: 10,
    fontSize: 15,
    fontFamily: "Poppins_700Bold",
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#2ddb7f",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    shadowColor: "#2ddb7f",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
  },
});
