import React from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DoctorLogin from './screens/DoctorLogin';
import PatientSelection from './screens/PatientSelection';
import DoctorHome from './screens/DoctorHome';
import PatientHome from './screens/PatientHome';
import { Ionicons } from '@expo/vector-icons';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DoctorTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="DoctorHome" 
        component={DoctorHome} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          title: "Home"
        }}
      />
    </Tab.Navigator>
  );
}

function PatientTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="PatientHome" 
        component={PatientHome} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
          title: "Doctors"
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name="DoctorLogin" component={DoctorLogin} />
          <AuthStack.Screen name="PatientSelection" component={PatientSelection} />
          <AuthStack.Screen name="DoctorTabs" component={DoctorTabs} />
          <AuthStack.Screen name="PatientTabs" component={PatientTabs} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
} 
