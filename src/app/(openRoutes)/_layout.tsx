import { Stack } from "expo-router";




export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="login/index" options={{headerShown: false}} />
      <Stack.Screen name="account/index" options={{headerShown: false}} />

    </Stack>
  );
}
