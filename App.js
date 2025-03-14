// Install dependencies:
// npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-paper @react-native-async-storage/async-storage react-native-notifications react-native-image-picker

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DoctorLogin from './screens/DoctorLogin';
import PatientSelection from './screens/PatientSelection';
import DoctorsHome from './screens/DoctorsHome';
import PatientsHome from './screens/PatientsHome';
import AppointmentBooking from './screens/AppointmentBooking';
import DoctorCalendar from './screens/DoctorCalendar';
import Notifications from './screens/Notifications';

const Stack = createStackNavigator();

// Main Navigation Setup
function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
      <Stack.Screen name="PatientSelection" component={PatientSelection} />
      <Stack.Screen name="DoctorHome" component={DoctorsHome} />
      <Stack.Screen name="PatientHome" component={PatientsHome} />
      <Stack.Screen name="AppointmentBooking" component={AppointmentBooking} />
      <Stack.Screen name="DoctorCalendar" component={DoctorCalendar} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
