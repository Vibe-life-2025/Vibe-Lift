import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PatientSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/patient.png')} style={styles.image} />
      <Text style={styles.title}>Welcome Patient</Text>
      <Text style={styles.subtitle}>Continue to your dashboard</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('PatientHome')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.replace('RoleScreen')}>
        <Text style={styles.backButtonText}>Back to Role Selection</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatientSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF8F1',
    padding: 20,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#24C17C',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#24C17C',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: '#888',
    fontSize: 14,
  },
});
