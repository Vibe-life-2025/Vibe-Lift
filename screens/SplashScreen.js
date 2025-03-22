import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const SplashScreen = ({ navigation }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Navigate to RoleScreen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('RoleScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Background Video */}
      <Video
        ref={videoRef}
        source={require('../assets/images/splash.mp4')} // ✅ Ensure correct video path
        style={styles.backgroundVideo}
        shouldPlay
        isLooping
        resizeMode="cover"
      />

      {/* App Name Overlay */}
      <View style={styles.overlay}>
        <Text style={styles.title}>VIBE LIFT</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#24C17C',
  },
});
