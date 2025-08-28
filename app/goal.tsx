import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Goal, UserInput } from "../src/types/user";
import AppText, { AppTextBold, AppTextBlack } from "../components/AppText";

export default function GoalScreen() {
  const router = useRouter();
  const params = useLocalSearchParams() as Partial<UserInput>;


  const chooseGoal = (goal: Goal) => {
    router.push({ pathname: "/result", params: { ...params, goal } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppTextBlack style={styles.title}>Select Your Goal</AppTextBlack>

      <Pressable style={styles.card} onPress={() => chooseGoal("loss")}>
        <Ionicons name="trending-down-outline" size={36} color="#ff7d7d" />
        <AppTextBold style={styles.cardTitle}>Lose Weight</AppTextBold>
      </Pressable>

      <Pressable style={styles.card} onPress={() => chooseGoal("maintain")}>
        <Ionicons name="pause-circle-outline" size={36} color="#2ddb7f" />
        <AppTextBold style={styles.cardTitle}>Maintain</AppTextBold>
      </Pressable>

      <Pressable style={styles.card} onPress={() => chooseGoal("gain")}>
        <Ionicons name="trending-up-outline" size={36} color="#85f0b0" />
        <AppTextBold style={styles.cardTitle}>Gain Weight</AppTextBold>
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
  title: {
    fontSize: 28,
    color: "#2ddb7f",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#101810",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    marginTop: 12,
    textAlign: "center",
  },
});
