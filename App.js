import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';

import PatientSelectionScreen from './screens/PatientSelection';
import RoleScreen from './screens/RoleScreen';
import DoctorHomeScreen from './screens/DoctorHome';
import PatientHomeScreen from './screens/PatientHome';
import DoctorLoginScreen from './screens/DoctorLogin';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const themeColors = {
  primary: '#24C17C',
  secondary: '#F8F9FA',
  text: '#333',
  accent: '#FFD700',
  background: '#EAF8F1',
  tabInactive: '#A0A0A0',
  cardBackground: '#FFFFFF',
};

// Doctor's Bottom Tab Navigator
function DoctorTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = route.name === 'Home' ? 'home' : 'clipboard';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: themeColors.tabInactive,
        tabBarStyle: { backgroundColor: themeColors.cardBackground, height: 65 },
      })}
    >
      <Tab.Screen name="Home" component={DoctorHomeScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// Patient's Bottom Tab Navigator
function PatientTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = route.name === 'Dashboard' ? 'person' : 'heart';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: themeColors.tabInactive,
        tabBarStyle: { backgroundColor: themeColors.cardBackground, height: 65 },
      })}
    >
      <Tab.Screen name="Dashboard" component={PatientHomeScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="RoleScreen" component={RoleScreen} />
        <Stack.Screen name="DoctorLogin" component={DoctorLoginScreen} />
        <Stack.Screen name="PatientSelection" component={PatientSelectionScreen} />
        <Stack.Screen name="DoctorHome" component={DoctorTabs} />
        <Stack.Screen name="PatientHome" component={PatientTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
