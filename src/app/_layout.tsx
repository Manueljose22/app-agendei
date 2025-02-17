import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/auth/auth";




export default function RootLayout() {
  return (
    // <Stack initialRouteName="/openRoutes/login">
    <AuthProvider>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(openRoutes)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
