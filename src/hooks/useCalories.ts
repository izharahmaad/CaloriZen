import { useMemo } from "react";
import { calculateBMR, calculateCalories, activityLevels } from "../utils/formulas";
import { toKg, toCm } from "../utils/units";

export const useCalories = (
  gender: string,
  age: string,
  weight: string,
  weightUnit: "kg" | "lb",
  height: string,
  heightUnit: "cm" | "ft",
  activity: string,
  goal: string
) => {
  return useMemo(() => {
    const w = parseFloat(weight || "0");
    const h = parseFloat(height || "0");
    const a = parseInt(age || "0", 10);

    const weightKg = toKg(w, weightUnit);
    const heightCm = toCm(h, heightUnit);

    const bmr = calculateBMR(gender, weightKg, heightCm, a);
    const daily = calculateCalories(bmr, activityLevels[activity] || 1.55);

    let target = daily;
    if (goal === "loss") target = daily - 500;
    if (goal === "gain") target = daily + 500;

    return {
      bmr: Math.round(bmr),
      daily: Math.round(daily),
      target: Math.round(target),
    };
  }, [gender, age, weight, weightUnit, height, heightUnit, activity, goal]);
};
