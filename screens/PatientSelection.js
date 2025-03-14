import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PatientSelection({ navigation }) {
  return (
    <View>
      <Text>Patient Selection Screen</Text>
      <Button
        title="Go to Patient Home"
        onPress={() => navigation.navigate('PatientHome')}
      />
    </View>
  );
}
