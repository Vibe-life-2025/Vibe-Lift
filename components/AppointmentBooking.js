import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Picker, StyleSheet, Alert } from "react-native";
import { fetchDoctors, bookAppointment } from "../API/appointmentApi";

const AppointmentBooking = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [email, setEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await fetchDoctors();
      setDoctors(data);
    };
    loadDoctors();
  }, []);

  const handleBooking = async () => {
    if (!selectedDoctor || !patientName || !patientAge || !email || !appointmentDate) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const appointmentData = {
      doctorId: selectedDoctor,
      patientName,
      patientAge,
      email,
      appointmentDate,
    };

    try {
      await bookAppointment(appointmentData);
      Alert.alert("Success", "Appointment booked successfully!");
    } catch (error) {
      Alert.alert("Error", "Could not book appointment");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>

      <Text style={styles.label}>Select Doctor</Text>
      <Picker selectedValue={selectedDoctor} onValueChange={setSelectedDoctor}>
        <Picker.Item label="Choose a doctor" value={null} />
        {doctors.map((doc) => (
          <Picker.Item key={doc.id} label={doc.name} value={doc.id} />
        ))}
      </Picker>

      <TextInput style={styles.input} placeholder="Name" onChangeText={setPatientName} />
      <TextInput style={styles.input} placeholder="Age" onChangeText={setPatientAge} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="YYYY-MM-DD HH:MM" onChangeText={setAppointmentDate} />

      <Button title="Book Appointment" onPress={handleBooking} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "white", flex: 1 },
  title: { fontSize: 24, fontWeight: "bold", color: "green", marginBottom: 10 },
  label: { fontSize: 18, marginBottom: 5 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default AppointmentBooking;
