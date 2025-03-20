import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, Alert } from "react-native";
import { fetchAppointments, updateAppointmentStatus } from "../API/appointmentApi";

const AppointmentManagement = ({ route }) => {
  const doctorId = route.params?.doctorId || "1"; // Default doctor for testing
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      // Fetch data from API
      const data = await fetchAppointments(doctorId);

      // Default data for testing when API is unavailable
      const defaultAppointments = [
        { id: "101", patientName: "Kaveesha Perera", appointmentDate: "2025-03-22 10:00 AM" },
        { id: "102", patientName: "Dilmi Perera", appointmentDate: "2025-03-22 11:30 AM" },
        { id: "103", patientName: "Ramesh Pathirana", appointmentDate: "2025-03-22 02:00 PM" },
      ];

      // Set the appointments (API data if available, otherwise default data)
      setAppointments(Array.isArray(data) && data.length > 0 ? data : defaultAppointments);
    };

    loadAppointments();
  }, [doctorId]);

  const handleAction = async (appointmentId, status) => {
    const result = await updateAppointmentStatus(appointmentId, status);

    // Show alert based on API response (or assume success for testing)
    Alert.alert(result?.success ? "Success" : "Error", result?.message || "Action completed");

    // Remove appointment from UI
    setAppointments((prev) => prev.filter((appt) => appt.id !== appointmentId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Appointments</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.appointmentCard}>
            <Text style={styles.appointmentText}>{item.patientName} - {item.appointmentDate}</Text>
            <View style={styles.buttonRow}>
              <Button title="Approve" onPress={() => handleAction(item.id, "Approved")} color="green" />
              <Button title="Decline" onPress={() => handleAction(item.id, "Declined")} color="red" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  appointmentCard: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 10 },
  appointmentText: { fontSize: 16, marginBottom: 8 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
});

export default AppointmentManagement;
