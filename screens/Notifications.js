import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.notificationCard}>
        <Text style={styles.notificationTitle}>New Appointment Request</Text>
        <Text style={styles.notificationText}>You have a new appointment request from a patient.</Text>
        <Button title="View" color="#24C17C" onPress={() => {}} />
      </View>
      <View style={styles.notificationCard}>
        <Text style={styles.notificationTitle}>Appointment Approved</Text>
        <Text style={styles.notificationText}>Your appointment on March 18 has been approved.</Text>
        <Button title="View Details" color="#FFD700" onPress={() => {}} />
      </View>
      <View style={styles.notificationCard}>
        <Text style={styles.notificationTitle}>Appointment Cancelled</Text>
        <Text style={styles.notificationText}>A patient cancelled their appointment scheduled for March 20.</Text>
        <Button title="Reschedule" color="#FF5733" onPress={() => {}} />
      </View>
    </View>
  );
};

export default NotificationsScreen;

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
  notificationCard: {
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  notificationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});