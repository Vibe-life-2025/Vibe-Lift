import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorHome from './screens/DoctorHome';
import PatientHome from './screens/PatientHome';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>  {/* ✅ Only ONE NavigationContainer */}
      <Stack.Navigator>
        <Stack.Screen name="DoctorHome" component={DoctorHome} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
