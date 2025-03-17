import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DoctorHomeScreen from './screens/DoctorHome';
import AppointmentBookingScreen from './screens/AppointmentBooking';
import DoctorCalendarScreen from './screens/DoctorCalendar';
import NotificationsScreen from './screens/Notifications';

import DoctorLoginScreen from './screens/DoctorLogin';
import PatientSelectionScreen from './screens/PatientSelection';
import PatientHomeScreen from './screens/PatientHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const themeColors = {
  primary: '#24C17C',
  secondary: '#F8F9FA',
  text: '#333',
  accent: '#FFD700',
  background: '#EAF8F1',
};

// Bottom Tab Navigator with Custom Styling
function DoctorTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Sessions') {
            iconName = 'videocam';
          } else if (route.name === 'Activity') {
            iconName = 'bar-chart';
          } else if (route.name === 'Community') {
            iconName = 'globe';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#FFFFFF', height: 65, paddingBottom: 10, paddingTop: 5 },
      })}
    >
      <Tab.Screen name="Home" component={DoctorHomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Sessions" component={AppointmentBookingScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Activity" component={DoctorCalendarScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Community" component={NotificationsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DoctorLogin" component={DoctorLoginScreen} />
        <Stack.Screen name="PatientSelection" component={PatientSelectionScreen} />
        <Stack.Screen name="DoctorHome" component={DoctorTabs} />
        <Stack.Screen name="PatientHome" component={PatientHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
