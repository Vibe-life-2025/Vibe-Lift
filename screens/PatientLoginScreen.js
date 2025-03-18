import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PatientLoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/patient.png')} style={styles.image} />
      <Text style={styles.title}>Welcome, Patient</Text>
      <Text style={styles.subtitle}>Tap below to continue</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('PatientHome')}>
        <Text style={styles.buttonText}>Enter as Patient</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatientLoginScreen;

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
