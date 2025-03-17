import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppointmentBooking from "./components/AppointmentBooking";
import AppointmentManagement from "./components/AppointmentManagement";
import { Ionicons } from "react-native-vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Main Tab Navigation
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === "Book Appointment" ? "calendar" : "list";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Book Appointment" component={AppointmentBooking} />
      <Tab.Screen name="Manage Appointments" component={AppointmentManagement} />
    </Tab.Navigator>
  );
}

// Root Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
