import React, { useState } from "react";
import { View, Text, Button, FlatList, Alert } from "react-native";

const AppointmentManagementScreen = () => {
  const [appointments, setAppointments] = useState([
    { id: "1", patient: "John Doe", date: "2025-03-14 10:00 AM" },
    { id: "2", patient: "Alice Brown", date: "2025-03-15 2:00 PM" },
  ]);

  const updateAppointmentStatus = (id, status) => {
    setAppointments(appointments.filter(app => app.id !== id));
    Alert.alert("Success", `Appointment ${status}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Appointments</Text>
      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>Patient: {item.patient}</Text>
            <Text>Date: {item.date}</Text>
            <Button title="Approve" onPress={() => updateAppointmentStatus(item.id, "Approved")} />
            <Button title="Decline" onPress={() => updateAppointmentStatus(item.id, "Declined")} color="red" />
          </View>
        )}
      />
    </View>
  );
};

export default AppointmentManagementScreen;
