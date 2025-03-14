import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DoctorLogin({ navigation }) {
  return (
    <View>
      <Text>Doctor Login Screen</Text>
      <Button
        title="Go to Patient Selection"
        onPress={() => navigation.navigate('PatientSelection')}
      />
      <Button
        title="Go to Doctor Home"
        onPress={() => navigation.navigate('DoctorHome')}
      />
    </View>
  );
}
