import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DoctorLogin from "./screens/DoctorLogin";
import DoctorHome from "./screens/DoctorHome";
import PatientSelection from "./screens/PatientSelection";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DoctorLogin" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
        <Stack.Screen name="DoctorHome" component={DoctorHome} />
        <Stack.Screen name="PatientSelection" component={PatientSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
