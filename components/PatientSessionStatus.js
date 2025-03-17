import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fetchPatientAppointments } from "../API/appointmentApi";

const PatientSessionStatus = ({ patientId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchPatientAppointments(patientId);
      setAppointments(data);
    };
    loadAppointments();
  }, [patientId]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Sessions</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.sessionCard}>
            <Text>{item.appointmentDate} - {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  sessionCard: { padding: 10, borderWidth: 1, marginBottom: 5 },
});

export default PatientSessionStatus;
