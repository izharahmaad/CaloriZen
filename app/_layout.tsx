import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_900Black } from "@expo-google-fonts/poppins";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
