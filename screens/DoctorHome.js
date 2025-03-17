import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DoctorHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Doctor Home</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('DoctorLogin')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DoctorHome;
