import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DoctorHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Dr. Sahana V</Text>
      <Text style={styles.subtitle}>How is your day going?</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Join Your Consultations</Text>
        <Button title="1-on-1 Sessions" color="#24C17C" onPress={() => navigation.navigate('AppointmentBooking')} />
      </View>
      <View style={styles.section}>
        <Button title="Doctor's Profile" color="#FFD700" onPress={() => {}} />
        <Button title="Patient's Profile" color="#FFD700" onPress={() => {}} />
      </View>
      <Button title="Join with us" color="#24C17C" onPress={() => {}} style={styles.joinButton} />
    </View>
  );
};

export default DoctorHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF8F1',
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
  joinButton: {
    marginTop: 20,
  },
});