import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RoleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
  );
};

export default RoleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '09D85F',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
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
  patient: {
    backgroundColor: '#24C17C',
  },
  doctor: {
    backgroundColor: '#24C17C',
  },
  roleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
});
