import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, Alert } from "react-native";
import { fetchAppointments, updateAppointmentStatus } from "../API/appointmentApi";

const AppointmentManagement = ({ route }) => {
  const doctorId = route.params?.doctorId || "1"; // Default for testing
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchAppointments(doctorId);
      setAppointments(data);
    };
    loadAppointments();
  }, [doctorId]);

  const handleAction = async (appointmentId, status) => {
    await updateAppointmentStatus(appointmentId, status);
    Alert.alert("Success", `Appointment ${status}`);
    setAppointments(appointments.filter((appt) => appt.id !== appointmentId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Appointments</Text>
      <FlatList data={appointments} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>{item.patientName} - {item.appointmentDate}</Text>
          <Button title="Approve" onPress={() => handleAction(item.id, "Approved")} color="green" />
          <Button title="Decline" onPress={() => handleAction(item.id, "Declined")} color="red" />
        </View>
      )} />
    </View>
  );
};

const styles = StyleSheet.create({ container: { padding: 20 }, header: { fontSize: 22, fontWeight: "bold" } });

export default AppointmentManagement;
