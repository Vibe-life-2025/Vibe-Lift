import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DoctorCalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor's Calendar</Text>
      <View style={styles.card}>
        <Text style={styles.date}>March 18, 2025</Text>
        <Text style={styles.time}>10:00 AM - 11:00 AM: Patient Consultation</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.date}>March 19, 2025</Text>
        <Text style={styles.time}>2:00 PM - 3:00 PM: Therapy Session</Text>
      </View>
      <Button title="Schedule New Appointment" color="#24C17C" onPress={() => {}} />
    </View>
  );
};

export default DoctorCalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '09D85F',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});