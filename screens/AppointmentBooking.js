import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AppointmentBooking({ navigation }) {
  return (
    <View>
      <Text>Book an Appointment</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
