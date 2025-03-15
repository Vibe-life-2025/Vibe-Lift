import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const DoctorsHome = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hello, Dr. Sahana V</Text>
      {/* Your other UI components */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    justifyContent: 'center', // Ensure it’s inside `contentContainerStyle`
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DoctorsHome;
