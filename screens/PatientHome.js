import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PatientHome({ navigation }) {
  return (
    <View>
      <Text>Patient Home Screen</Text>
      <Button
        title="Go to Doctor Home"
        onPress={() => navigation.navigate('DoctorHome')}
      />
    </View>
  );
}
