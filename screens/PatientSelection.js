import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PatientSelection = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Patient Selection</Text>
      <Text style={styles.subtitle}>Choose a patient to view details:</Text>

      <TouchableOpacity style={styles.button} onPress={() => alert("Patient Profile Coming Soon")}>
        <Text style={styles.buttonText}>View Patient 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert("Patient Profile Coming Soon")}>
        <Text style={styles.buttonText}>View Patient 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("DoctorHome")}>
        <Text style={styles.navButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#00A86B",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  navButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  navButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default PatientSelection;
