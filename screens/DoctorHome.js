import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DoctorHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/doctor.png')} style={styles.image} />
      <Text style={styles.title}>Welcome, Doctor</Text>
      <Text style={styles.subtitle}>Manage your appointments and reports</Text>

      <View style={styles.section}>
        <Button
          title="View Appointments"
          color="#24C17C"
          onPress={() => navigation.navigate('AppointmentBooking')}
        />
        <Button
          title="Manage Reports"
          color="#FFD700"
          onPress={() => navigation.navigate('Reports')}
        />

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.replace('RoleScreen')}>
          <Text style={styles.backButtonText}>Back to Role Selection</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorHomeScreen;

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
    gap: 10,
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ccc',
    borderRadius: 6,
  },
  backButtonText: {
    fontSize: 16,
    color: '#333',
  },
});
