export type Gender = "male" | "female" | "unspecified";
export type Goal = "loss" | "maintain" | "gain";
export type UnitWeight = "kg" | "lb";
export type UnitHeight = "cm" | "ft";

export interface UserInput {
  gender: Gender;
  age: string;
  weight: string;
  weightUnit: UnitWeight;
  height: string;
  heightUnit: UnitHeight;
  notes?: string;
  activity: string;
  goal?: Goal;
}
