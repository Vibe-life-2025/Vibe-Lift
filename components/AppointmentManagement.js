import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, Alert } from "react-native";
import { fetchAppointments, updateAppointmentStatus } from "../API/appointmentApi";

const AppointmentManagement = ({ route }) => {
  const doctorId = route.params?.doctorId || "1"; // Default doctor ID for testing
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchAppointments(doctorId);
      setAppointments(data);
    };
    loadAppointments();
  }, [doctorId]);

  const handleAction = async (appointmentId, status) => {
    const result = await updateAppointmentStatus(appointmentId, status);
    if (result.success) {
      Alert.alert("Success", `Appointment ${status}`);
      setAppointments(appointments.filter((appt) => appt.id !== appointmentId));
    } else {
      Alert.alert("Offline Mode", result.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Appointments</Text>
      {appointments.length === 0 ? (
        <Text>No appointments available.</Text>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.appointmentCard}>
              <Text style={styles.text}>
                {item.patientName} - {item.appointmentDate}
              </Text>
              <View style={styles.buttonContainer}>
                <Button title="Approve" onPress={() => handleAction(item.id, "Approved")} color="green" />
                <Button title="Decline" onPress={() => handleAction(item.id, "Declined")} color="lightgray" />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default AppointmentManagement;
