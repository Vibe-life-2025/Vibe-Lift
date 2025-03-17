import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const PatientHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/patient.png')} style={styles.image} />
      <Text style={styles.title}>Welcome, Patient</Text>
      <Text style={styles.subtitle}>Your health is our priority</Text>
      <View style={styles.section}>
        <Button title="Book Appointment" color="#24C17C" onPress={() => navigation.navigate('AppointmentBooking')} />
        <Button title="View Reports" color="#FFD700" onPress={() => navigation.navigate('Reports')} />
      </View>
    </View>
  );
};

export default PatientHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF8F1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});