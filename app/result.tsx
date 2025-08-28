import { View, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";
import { useCalories } from "../src/hooks/useCalories";
import { UserInput } from "../src/types/user";
import AppText, { AppTextBold, AppTextBlack } from "../components/AppText";

export default function Result() {
  const params = useLocalSearchParams() as Partial<UserInput>;
  const {
    gender,
    age,
    weight,
    weightUnit,
    height,
    heightUnit,
    activity = "moderate",
    goal = "maintain",
  } = params;

  const { bmr, daily } = useCalories(
    gender!,
    age!,
    weight!,
    weightUnit!,
    height!,
    heightUnit!,
    activity!,
    goal!
  );

  // Calorie scenarios
  const maintain = daily;
  const mildLoss = Math.round(daily * 0.9);
  const loss = Math.round(daily * 0.79);
  const extremeLoss = Math.round(daily * 0.59);
  const leanGain = Math.round(daily * 1.1);
  const aggressiveGain = Math.round(daily * 1.2);

  // Helper: estimate kg/week
  const kgPerWeek = (base: number, target: number) => {
    const diff = target - base;
    return (diff * 7 / 7700).toFixed(2);
  };

  // Gauge setup
  const size = 220;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(maintain / 4000, 1);
  const strokeDashoffset = circumference - circumference * progress;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <AppTextBlack style={styles.title}>Your Daily Calories</AppTextBlack>

        {/* Gauge */}
        <View style={{ marginVertical: 30, alignItems: "center" }}>
          <Svg width={size} height={size}>
            <Circle
              stroke="#153a26"
              fill="none"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <Circle
              stroke="#2ddb7f"
              fill="none"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </Svg>
          <View style={styles.gaugeCenter}>
            <Ionicons name="flame-outline" size={32} color="#2ddb7f" />
            <AppTextBlack style={styles.gaugeValue}>{maintain}</AppTextBlack>
            <AppText style={styles.gaugeLabel}>kcal / day</AppText>
          </View>
        </View>

        {/* Maintain */}
        <View style={[styles.breakdownCard, { borderLeftColor: "#4da6ff" }]}>
          <Ionicons name="pause-circle-outline" size={26} color="#4da6ff" />
          <AppTextBold style={styles.breakdownTitle}>Maintain weight</AppTextBold>
          <AppTextBlack style={styles.breakdownCalories}>{maintain} kcal</AppTextBlack>
          <AppText style={styles.breakdownDesc}>100% of your daily calories</AppText>
        </View>

        {/* If user selected weight loss */}
        {goal === "loss" && (
          <>
            <View style={styles.sectionHeader}>
              <Ionicons name="trending-down-outline" size={20} color="#ff7d7d" />
              <AppTextBold style={styles.sectionTitle}>Weight Loss</AppTextBold>
            </View>

            <View style={[styles.breakdownCard, { borderLeftColor: "#ff7d7d" }]}>
              <Ionicons name="remove-circle-outline" size={24} color="#ff7d7d" />
              <AppTextBold style={styles.breakdownTitle}>Mild loss</AppTextBold>
              <AppTextBlack style={styles.breakdownCalories}>{mildLoss} kcal</AppTextBlack>
              <AppText style={styles.breakdownDesc}>
                90% of maintain · about {kgPerWeek(maintain, mildLoss)} kg per week
              </AppText>
            </View>

            <View style={[styles.breakdownCard, { borderLeftColor: "#ff4d4d" }]}>
              <Ionicons name="alert-circle-outline" size={24} color="#ff4d4d" />
              <AppTextBold style={styles.breakdownTitle}>Moderate loss</AppTextBold>
              <AppTextBlack style={styles.breakdownCalories}>{loss} kcal</AppTextBlack>
              <AppText style={styles.breakdownDesc}>
                79% of maintain · about {kgPerWeek(maintain, loss)} kg per week
              </AppText>
            </View>

            <View style={[styles.breakdownCard, { borderLeftColor: "#e60000" }]}>
              <Ionicons name="warning-outline" size={24} color="#e60000" />
              <AppTextBold style={styles.breakdownTitle}>Extreme loss</AppTextBold>
              <AppTextBlack style={styles.breakdownCalories}>{extremeLoss} kcal</AppTextBlack>
              <AppText style={styles.breakdownDesc}>
                59% of maintain · about {kgPerWeek(maintain, extremeLoss)} kg per week
              </AppText>
            </View>
          </>
        )}

        {/* If user selected weight gain */}
        {goal === "gain" && (
          <>
            <View style={styles.sectionHeader}>
              <Ionicons name="trending-up-outline" size={20} color="#85f0b0" />
              <AppTextBold style={styles.sectionTitle}>Weight Gain</AppTextBold>
            </View>

            <View style={[styles.breakdownCard, { borderLeftColor: "#33cc66" }]}>
              <Ionicons name="add-circle-outline" size={24} color="#33cc66" />
              <AppTextBold style={styles.breakdownTitle}>Lean gain</AppTextBold>
              <AppTextBlack style={styles.breakdownCalories}>{leanGain} kcal</AppTextBlack>
              <AppText style={styles.breakdownDesc}>
                110% of maintain · about {kgPerWeek(maintain, leanGain)} kg per week
              </AppText>
            </View>

            <View style={[styles.breakdownCard, { borderLeftColor: "#00994d" }]}>
              <Ionicons name="fitness-outline" size={24} color="#00994d" />
              <AppTextBold style={styles.breakdownTitle}>Aggressive gain</AppTextBold>
              <AppTextBlack style={styles.breakdownCalories}>{aggressiveGain} kcal</AppTextBlack>
              <AppText style={styles.breakdownDesc}>
                120% of maintain · about {kgPerWeek(maintain, aggressiveGain)} kg per week
              </AppText>
            </View>
          </>
        )}

        {/* Extra Info */}
        <View style={styles.card}>
          <Ionicons name="bed-outline" size={26} color="#ff7d7d" />
          <AppText style={styles.label}>Calories if Resting (BMR)</AppText>
          <AppTextBlack style={styles.value}>{bmr} kcal</AppTextBlack>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f0a" },
  scrollContent: { alignItems: "center", padding: 20, paddingBottom: 80 },
  title: { fontSize: 26, color: "#2ddb7f", marginTop: 20, textAlign: "center" },
  gaugeCenter: {
    position: "absolute",
    top: "38%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  gaugeValue: { fontSize: 30, color: "#fff", fontFamily: "Poppins_900Black" },
  gaugeLabel: { fontSize: 14, color: "#a6d7aa" },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 18,
    marginBottom: 6,
    alignSelf: "flex-start",
    paddingLeft: "5%",
  },
  sectionTitle: { fontSize: 16, color: "#a6d7aa" },

  breakdownCard: {
    backgroundColor: "#101810",
    borderRadius: 16,
    padding: 18,
    width: "90%",
    marginVertical: 6,
    alignItems: "center",
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  breakdownTitle: { fontSize: 18, marginTop: 4, color: "#eaffea" },
  breakdownCalories: {
    fontSize: 24,
    color: "#fff",
    marginTop: 4,
    fontFamily: "Poppins_900Black",
  },
  breakdownDesc: { fontSize: 14, color: "#a6d7aa", textAlign: "center" },

  card: {
    width: "90%",
    backgroundColor: "#101810",
    borderRadius: 20,
    padding: 20,
    marginVertical: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
  },
  label: { color: "#a6d7aa", fontSize: 15, textAlign: "center" },
  value: { color: "#fff", fontSize: 22 },
});
