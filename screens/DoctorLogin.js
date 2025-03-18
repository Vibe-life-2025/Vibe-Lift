import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const DoctorLoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* AI GIF Background */}
      <Image source={require('../assets/images/Doctor.gif')} style={styles.gifBackground} />

      {/* Login UI Overlay */}
      <View style={styles.overlay}>
        
        <Text style={styles.title}>Doctor Login</Text>
        <Text style={styles.subtitle}>Please enter your credentials</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <Button title="Login" color="#24C17C" onPress={() => navigation.navigate('DoctorHome')} />
      </View>
    </View>
  );
};

export default DoctorLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // ✅ Ensures the GIF fills the screen
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // ✅ Dark overlay for visibility
    width: '100%',
    height: '100%',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff', // ✅ White text for better visibility
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
