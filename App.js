import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DoctorLoginScreen from './screens/DoctorLogin';
import PatientSelectionScreen from './screens/PatientSelection';
import DoctorHomeScreen from './screens/DoctorHome';
import AppointmentBookingScreen from './screens/AppointmentBooking';
import DoctorCalendarScreen from './screens/DoctorCalendar';
import NotificationsScreen from './screens/Notifications';

import PatientHomeScreen from './screens/PatientHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const themeColors = {
  primary: '#24C17C',
  secondary: '#F8F9FA',
  text: '#333',
  accent: '#FFD700',
  background: '#EAF8F1',
};

// Stack Navigator for Doctor's Screens
const DoctorStack = createStackNavigator();
function DoctorStackScreens() {
  return (
    <DoctorStack.Navigator screenOptions={{ headerShown: false }}>
      <DoctorStack.Screen name="Home" component={DoctorHomeScreen} />
      <DoctorStack.Screen name="AppointmentBooking" component={AppointmentBookingScreen} />
      <DoctorStack.Screen name="Calendar" component={DoctorCalendarScreen} />
      
      <DoctorStack.Screen name="Notifications" component={NotificationsScreen} />
    </DoctorStack.Navigator>
  );
}

// Bottom Tab Navigator
function DoctorTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'Appointments') {
            iconName = 'calendar-check';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          } else if (route.name === 'Reports') {
            iconName = 'folder';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: themeColors.text,
        tabBarStyle: { backgroundColor: themeColors.secondary },
      })}
    >
      <Tab.Screen name="Dashboard" component={DoctorStackScreens} options={{ headerShown: false }} />
      <Tab.Screen name="Appointments" component={AppointmentBookingScreen} />
      
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
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
        <Stack.Screen name="PatientsHome" component={PatientHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
