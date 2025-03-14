import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DoctorHome({ navigation }) {
  return (
    <View>
      <Text>Doctor Home Screen</Text>
      <Button
        title="Go to Patient Selection"
        onPress={() => navigation.navigate('PatientSelection')}
      />
      <Button
        title="Go to Patient Home"
        onPress={() => navigation.navigate('PatientHome')}
      />
    </View>
  );
}
