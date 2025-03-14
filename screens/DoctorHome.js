import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const DoctorsHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/doctor.png')} style={styles.image} />
      <Text style={styles.title}>Welcome, Doctor</Text>
      <Text style={styles.subtitle}>Manage your appointments and reports</Text>
      <View style={styles.section}>
        <Button title="View Appointments" color="#24C17C" onPress={() => navigation.navigate('AppointmentBooking')} />
        <Button title="Manage Reports" color="#FFD700" onPress={() => navigation.navigate('Reports')} />
      </View>
    </View>
  );
};

export default DoctorsHomeScreen;

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
