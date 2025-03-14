import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DoctorsHomeScreen from './screens/DoctorsHome';
import AppointmentBookingScreen from './screens/AppointmentBooking';
import DoctorCalendarScreen from './screens/DoctorCalendar';
import NotificationsScreen from './screens/Notifications';
import ReportsScreen from './screens/Reports';
import DoctorLoginScreen from './screens/DoctorLogin';
import PatientSelectionScreen from './screens/PatientSelection';
import PatientsHomeScreen from './screens/PatientsHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DoctorsHomeScreen} />
      <Tab.Screen name="Sessions" component={AppointmentBookingScreen} />
      <Tab.Screen name="Activity" component={DoctorCalendarScreen} />
      <Tab.Screen name="Community" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

// Patient's Bottom Tab Navigator
function PatientTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={PatientsHomeScreen} />
      <Tab.Screen name="Appointments" component={AppointmentBookingScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DoctorLogin" component={DoctorLoginScreen} />
        <Stack.Screen name="PatientSelection" component={PatientSelectionScreen} />
        <Stack.Screen name="DoctorsHome" component={DoctorTabs} />
        <Stack.Screen name="PatientsHome" component={PatientTabs} />
        <Stack.Screen name="AppointmentBooking" component={AppointmentBookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
