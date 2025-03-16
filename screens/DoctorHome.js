import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const DoctorHome = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F8F9FA', padding: 20 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello,</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>Dr. Sahana V</Text>
          <Text style={{ fontSize: 14, color: '#666' }}>How about your day?</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={{ width: 50, height: 50, borderRadius: 25 }} />
      </View>
      
      {/* Consultation Section */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Join your consultations</Text>
        <TouchableOpacity style={{ backgroundColor: '#32CD32', padding: 15, borderRadius: 10, marginBottom: 10 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Join 1 on 1 Session</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#E8F5E9', padding: 15, borderRadius: 10, marginRight: 5 }}>
            <Text style={{ color: '#333', textAlign: 'center' }}>Doctor’s Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#E8F5E9', padding: 15, borderRadius: 10, marginLeft: 5 }}>
            <Text style={{ color: '#333', textAlign: 'center' }}>Patient’s Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Upcoming Session */}
      <View style={{ marginTop: 20, padding: 15, backgroundColor: '#DFFFD8', borderRadius: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Upcoming Session</Text>
        <Text style={{ color: '#555' }}>Clinical Psychology - 7:30 PM</Text>
        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#32CD32', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const Community = () => <View><Text>Community Screen</Text></View>;
const Activity = () => <View><Text>Activity Screen</Text></View>;
const Home = () => <DoctorHome />;

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }}
        />
        <Tab.Screen 
          name="Activity" 
          component={Activity} 
          options={{ tabBarIcon: ({ color }) => <FontAwesome name="line-chart" size={24} color={color} /> }}
        />
        <Tab.Screen 
          name="Community" 
          component={Community} 
          options={{ tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
