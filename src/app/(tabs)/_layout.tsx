import { Stack } from "expo-router";
import { Colors } from "../../constants/Colors";




export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{headerShown: false}}/>
      <Stack.Screen name="services/index" options={{headerStyle: {backgroundColor: Colors.blue}, 
                                                    headerTitle: "Serviços",
                                                    headerTintColor: Colors.white,
                                                    headerShadowVisible: false,
                                                    headerTitleAlign: 'center'}}/>

      <Stack.Screen name="schedule/index" options={{
                                                    headerTitle: "Fazer uma reserva",
                                                    headerTintColor: Colors.blue,
                                                    headerShadowVisible: false,
                                                    headerTitleAlign: 'center'}}/>
    </Stack>
  );
}
