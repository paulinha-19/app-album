import { Stack } from "expo-router";

export default function StickersStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="details" options={{ headerShown: true, headerBackTitle: "Voltar", headerTitleAlign: "left", headerTitle: "Figurinha", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" } }} />
    </Stack>
  );
}
