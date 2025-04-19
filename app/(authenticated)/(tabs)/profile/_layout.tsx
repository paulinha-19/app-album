import { router, Stack } from "expo-router"
import { StyleSheet } from "react-native";
import HeaderIcon from "@/components/common/HeaderIcon";

export default function ProfileStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{
        headerRight: () => (
          <HeaderIcon source={require("../../../../assets/images/settings-icon.png")} items={[
            { label: "Editar perfil", onPress: () => { } },
            { label: "Sobre o app", onPress: () => { router.push("/(authenticated)/(tabs)/profile/about-app") } }
          ]} />
        ), headerShown: true, headerBackTitle: "", headerTitleAlign: "left", headerTitle: "Perfil", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" }
      }} />
      <Stack.Screen name="friends" options={{
        headerRight: () => (
          <HeaderIcon source={require("../../../../assets/images/kebab-menu.png")} items={[
            { label: "Desfazer amizade", onPress: () => { router.push("/(authenticated)/(tabs)/profile/undoing-friendship") } },
            { label: "Adicionar amigo", onPress: () => { router.push("/(authenticated)/(tabs)/profile/add-friends") } },
          ]} />
        ), headerShown: true, headerBackTitle: "Voltar", headerTitleAlign: "left", headerTitle: "Amigos", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" }
      }} />
      <Stack.Screen name="add-friends" options={{ headerShown: true, headerBackTitle: "Voltar", headerTitleAlign: "left", headerTitle: "Adicionar amigo", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" } }} />
      <Stack.Screen name="missions" options={{ headerShown: true, headerBackTitle: "Voltar", headerTitleAlign: "left", headerTitle: "Missões", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" } }} />
      <Stack.Screen name="my-tickets" options={{ headerShown: true, headerBackTitle: "Voltar", headerTitleAlign: "left", headerTitle: "Meus tickets da sorte", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" } }} />
      <Stack.Screen name="about-app" options={{ headerShown: true, headerBackTitle: "Voltar", headerTitleAlign: "left", headerTitle: "Sobre o app", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" } }} />
      <Stack.Screen name="undoing-friendship" options={{ headerShown: true, headerBackTitle: "Voltar", headerTitleAlign: "left", headerTitle: "Desfazer amizade", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" } }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  settingsMenu: {
    width: 42,
    height: 42
  }
})