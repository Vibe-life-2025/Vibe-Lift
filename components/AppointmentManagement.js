import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, Alert } from "react-native";
import { fetchAppointments, updateAppointmentStatus } from "../API/appointmentApi";

const AppointmentManagement = ({ route }) => {
  const doctorId = route.params?.doctorId; // Get doctor ID from navigation params
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchAppointments(doctorId);
      setAppointments(data);
    };
    loadAppointments();
  }, [doctorId]);

  const handleAction = async (appointmentId, status) => {
    try {
      await updateAppointmentStatus(appointmentId, status);
      Alert.alert("Success", `Appointment ${status}`);
      setAppointments(appointments.filter((appt) => appt.id !== appointmentId));
    } catch (error) {
      Alert.alert("Error", "Could not update status");
      console.error(error);
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

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "white", flex: 1 },
  header: { fontSize: 22, fontWeight: "bold", color: "green", marginBottom: 10 },
  appointmentCard: { padding: 10, borderWidth: 1, marginBottom: 5 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-around", marginTop: 5 },
  text: { fontSize: 16 },
});

export default AppointmentManagement;
