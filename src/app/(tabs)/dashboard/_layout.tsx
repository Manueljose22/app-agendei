import { Tabs } from "expo-router";
import { Image } from "react-native";
import { home, calendar, profile, logo } from '../../../constants/Icons';
import { Colors } from '../../../constants/Colors';




export default function TabLayout() {
  return (
    <Tabs sceneContainerStyle= {{backgroundColor: Colors.white}} >
     <Tabs.Screen name="home/index" 
        options={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitle: () => (
            <Image source={logo} style={{ width: 125, height: 29 }} />
          ),
          tabBarIcon: ({ focused }) => (
            <Image source={home} style={
              {
                width: 25, height: 25,
                opacity: focused ? 1 : 0.5
              }} />
          ),
          tabBarShowLabel: false,
          
        }}
      />
      <Tabs.Screen name="booking/index"
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Minhas reservas',
          headerTintColor: Colors.blue,
          tabBarIcon: ({ focused }) => (
            <Image source={calendar} style={
              {
                width: 25, height: 25,
                opacity: focused ? 1 : 0.5
              }} />
          ),
          tabBarShowLabel: false,
          unmountOnBlur: true
        }} />
      <Tabs.Screen name="profile/index"
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Perfil',
          headerTintColor: Colors.blue,
          tabBarIcon: ({ focused }) => (
            <Image source={profile} style={
              {
                width: 25, height: 25,
                opacity: focused ? 1 : 0.5
              }} />
          ),
          tabBarShowLabel: false,
          unmountOnBlur: true
        }} />
    </Tabs>
  );
}
