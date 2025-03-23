import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';

const RoleScreen = ({ navigation }) => {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* Background Video */}
      <Video
        ref={videoRef}
        source={require('../assets/images/Role.mp4')} // ✅ Ensure correct video path
        style={styles.backgroundVideo}
        shouldPlay
        isLooping
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>Choose your Role</Text>
        <View style={styles.roleContainer}>
          <TouchableOpacity 
            style={[styles.roleButton, styles.patient]} 
            onPress={() => navigation.replace('PatientSelection')}
          >
            <Image source={require('../assets/images/patient2.png')} style={styles.image} />
            <Text style={styles.roleText}>Patient</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.roleButton, styles.doctor]} 
            onPress={() => navigation.replace('DoctorLogin')}
          >
            <Image source={require('../assets/images/doctor2.png')} style={styles.image} />
            <Text style={styles.roleText}>Doctor</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RoleScreen;

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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // ✅ White text for visibility
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  roleButton: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    
  },
  roleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
  image: {
    width: 80,
    height: 80,
  },
});
