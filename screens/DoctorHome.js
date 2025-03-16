import React from 'react';
import { View, Text, Button } from 'react-native';

const DoctorHome = ({ navigation }) => {
  return (
    <View>
      <Text>Doctor Home</Text>
      <Button title="Go to Calendar" onPress={() => navigation.navigate('DoctorCalendar')} />
    </View>
  );
};

export default DoctorHome;
