import { Stack } from "expo-router";

export default function AlbumStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="list-categories" options={{ headerShown: true, headerBackTitle: "Voltar", headerTitleAlign: "left", headerTitle: "Lista de categorias", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" } }} />
    </Stack>
  );
}
