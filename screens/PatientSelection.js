import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';

const PatientHomeScreen = ({ navigation }) => {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* Background Video */}
      <Video
        ref={videoRef}
        source={require('../assets/images/Doctor2.mp4')} // ✅ Ensure correct video path
        style={styles.backgroundVideo}
        shouldPlay
        isLooping
        resizeMode="cover"
      />

      {/* Content Overlay */}
      <View style={styles.overlay}>
        
        <Text style={styles.title}>Welcome, Patient</Text>
        <Text style={styles.subtitle}>Your health is our priority</Text>
        <View style={styles.section}>
          <Button title="View Health Records" color="#24C17C" onPress={() => navigation.navigate('HealthRecords')} />
          <Button title="Find a Doctor" color="#FFD700" onPress={() => navigation.navigate('DoctorSelection')} />
        </View>
      </View>
    </View>
  );
};

export default PatientHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // ✅ Dark overlay for better visibility
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
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});