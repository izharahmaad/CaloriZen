export const toKg = (value: number, unit: "kg" | "lb") =>
  unit === "kg" ? value : value * 0.453592;

export const toCm = (value: number, unit: "cm" | "ft") =>
  unit === "cm" ? value : value * 30.48;
