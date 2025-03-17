import React from 'react';
import { View, Text, Button } from 'react-native';

const UserTypeSelection = ({ setUserType, navigation }) => {
  return (
    <View>
      <Text>Welcome! Please select your user type.</Text>
      <Button title="I am a Doctor" onPress={() => {
        setUserType('doctor');  // Set user type as 'doctor'
        navigation.navigate('DoctorLogin');  // Navigate to doctor login
      }} />
      <Button title="I am a Patient" onPress={() => {
        setUserType('patient');  // Set user type as 'patient'
        navigation.navigate('PatientSelection');  // Navigate to patient selection
      }} />
    </View>
  );
};

export default UserTypeSelection;
