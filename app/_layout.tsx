import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { AuthProvider } from "@/context/AuthContext";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import { StatusBar } from "react-native";

export default function NotAuthenticatedLayout() {
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}

const RootLayout = () => {
  const {
    user,
    getToken,
    isAuthenticated,
    setIsAuthenticated,
    isAuthenticatedUser,
  } = useAuth();

  useEffect(() => {
    if (isAuthenticatedUser) {
      setIsAuthenticated(true);
      router.replace("/(authenticated)/home");
    } else {
      router.replace("/(not-authenticated)/signin/page");
    }
  }, [isAuthenticatedUser]);

  return (
    <GluestackUIProvider mode="light">
      <StatusBar backgroundColor="#41979E" barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(not-authenticated)/signin/page" />
        <Stack.Screen name="(not-authenticated)/signup/page" options={{ headerShown: true, headerBackTitle: "Voltar", headerTitle: "Criar conta", headerTitleAlign: "center", headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: "#4AACB3" } }} />
      </Stack>
    </GluestackUIProvider>
  );
};
