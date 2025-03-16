import React from 'react';
import { View, Text, Button } from 'react-native';

const DoctorLogin = ({ navigation }) => {
  return (
    <View>
      <Text>Doctor Login</Text>
      <Button title="Login" onPress={() => navigation.replace('DoctorHome')} />
    </View>
  );
};

export default DoctorLogin;
