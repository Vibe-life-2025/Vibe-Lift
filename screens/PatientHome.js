import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PatientHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Patient</Text>
      <Text style={styles.subtitle}>Your health is our priority.</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Appointments</Text>
        <Button title="View Appointments" color="#24C17C" onPress={() => {}} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Consult Your Doctor</Text>
        <Button title="Book a Session" color="#FFD700" onPress={() => {}} />
      </View>
    </View>
  );
};

export default PatientHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '09D85F',
    padding: 20,
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
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});