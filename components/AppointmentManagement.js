import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { fetchDoctorAppointments, updateAppointmentStatus } from "../API/appointmentApi";

const AppointmentManagement = ({ doctorId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchDoctorAppointments(doctorId);
      setAppointments(data);
    };
    loadAppointments();
  }, [doctorId]);

  const handleAction = async (appointmentId, status) => {
    try {
      await updateAppointmentStatus(appointmentId, status);
      alert(`Appointment ${status}`);
      setAppointments(appointments.filter((appt) => appt.id !== appointmentId));
    } catch (error) {
      alert("Error updating appointment status");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Appointments</Text>
      {appointments.length === 0 ? (
        <Text>No appointments available.</Text>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.appointmentCard}>
              <Text style={styles.text}>{item.name} ({item.age})</Text>
              <Text style={styles.text}>{item.email}</Text>
              <Text style={styles.text}>Date: {item.sessionDate}</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.approveButton} onPress={() => handleAction(item.id, "Approved")}>
                  <Text style={styles.buttonText}>Approve</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.declineButton} onPress={() => handleAction(item.id, "Declined")}>
                  <Text style={styles.buttonText}>Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  header: { fontSize: 22, fontWeight: "bold", color: "green", textAlign: "center", marginBottom: 15 },
  appointmentCard: { padding: 10, borderWidth: 1, borderColor: "gray", marginBottom: 10, borderRadius: 5 },
  text: { fontSize: 16, marginBottom: 5 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  approveButton: { backgroundColor: "green", padding: 10, borderRadius: 5, flex: 1, marginRight: 5 },
  declineButton: { backgroundColor: "lightgray", padding: 10, borderRadius: 5, flex: 1, marginLeft: 5 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" },
});

export default AppointmentManagement;
