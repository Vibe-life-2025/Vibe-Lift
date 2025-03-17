import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PatientSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Patient Profile</Text>
      <Text style={styles.subtitle}>Tap to enter as a patient</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('PatientHome')}>
        <Text style={styles.buttonText}>Enter as Patient</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatientSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF8F1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#24C17C',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
