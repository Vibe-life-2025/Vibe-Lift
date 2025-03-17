import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native';

// Import Screens
import AppointmentBooking from './screens/AppointmentBooking';
import DoctorCalendar from './screens/DoctorCalendar';
import DoctorHome from './screens/DoctorHome';
import DoctorLogin from './screens/DoctorLogin';
import Notifications from './screens/Notifications';
import PatientHome from './screens/PatientHome';
import PatientSelection from './screens/PatientSelection';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DoctorHome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="DoctorHome" component={DoctorHome} />
          <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
          <Stack.Screen name="DoctorCalendar" component={DoctorCalendar} />
          <Stack.Screen name="AppointmentBooking" component={AppointmentBooking} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="PatientHome" component={PatientHome} />
          <Stack.Screen name="PatientSelection" component={PatientSelection} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Ensures no white screen issue
  },
});

export default App;
