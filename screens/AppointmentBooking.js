import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AppointmentBookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Sessions</Text>
      <View style={styles.card}>
        <Text style={styles.sessionTitle}>Sahana V - Msc in Clinical Psychology</Text>
        <Text style={styles.sessionTime}>7:30 PM - 8:30 PM</Text>
        <Button title="Join Now" color="#24C17C" onPress={() => {}} />
      </View>
      <View style={styles.card}>
        <Text style={styles.sessionTitle}>Sahana V - Msc in Clinical Psychology</Text>
        <Text style={styles.sessionTime}>10:00 AM - 11:00 AM</Text>
        <Button title="Reschedule" color="#FFD700" onPress={() => {}} />
      </View>
    </View>
  );
};

export default AppointmentBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '93B9A3',
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
  sessionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  sessionTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});