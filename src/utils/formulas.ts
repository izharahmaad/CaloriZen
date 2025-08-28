export const calculateBMR = (gender: string, weightKg: number, heightCm: number, age: number) => {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  if (gender === "male") return base + 5;
  if (gender === "female") return base - 161;
  return base - 78;
};

export const calculateCalories = (bmr: number, activityFactor: number) => bmr * activityFactor;

export const activityLevels: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  extra: 1.9,
};
