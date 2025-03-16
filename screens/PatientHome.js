import React from 'react';
import { View, Text, Button } from 'react-native';

const PatientHome = ({ navigation }) => {
  return (
    <View>
      <Text>Patient Home</Text>
      <Button title="Select Doctor" onPress={() => navigation.navigate('PatientSelection')} />
    </View>
  );
};

export default PatientHome;
