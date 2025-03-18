import React, { useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';

const DoctorLoginScreen = ({ navigation }) => {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* AI Video Background */}
      <Video
        ref={videoRef}
        source={require('../assets/images/Doc.mp4')} // ✅ Path to your AI-generated video
        style={styles.backgroundVideo}
        shouldPlay
        isLooping
        resizeMode="cover"
      />

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
  backgroundVideo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // ✅ Dark overlay for better visibility
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
