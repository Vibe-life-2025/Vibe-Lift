import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Picker, StyleSheet } from "react-native";
import { fetchDoctors, bookAppointment } from "../API/appointmentApi";

const AppointmentBooking = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [sessionDate, setSessionDate] = useState("");

  useEffect(() => {
    const loadDoctors = async () => {
      const doctorList = await fetchDoctors();
      setDoctors(doctorList);
      if (doctorList.length > 0) {
        setSelectedDoctor(doctorList[0].id); // Default to first doctor
      }
    };
    loadDoctors();
  }, []);

  const handleBooking = async () => {
    if (!name || !age || !email || !sessionDate || !selectedDoctor) {
      alert("Please fill all fields");
      return;
    }

    const appointmentData = { name, age, email, sessionDate, doctorId: selectedDoctor };

    try {
      await bookAppointment(appointmentData);
      alert("Appointment booked successfully!");
    } catch (error) {
      alert("Error booking appointment");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>

      <Text style={styles.label}>Select a Doctor:</Text>
      <Picker selectedValue={selectedDoctor} onValueChange={(itemValue) => setSelectedDoctor(itemValue)}>
        {doctors.map((doctor) => (
          <Picker.Item key={doctor.id} label={doctor.name} value={doctor.id} />
        ))}
      </Picker>

      <TextInput style={styles.input} placeholder="Name" onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" onChangeText={setAge} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Session Date & Time" onChangeText={setSessionDate} />
      
      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  title: { fontSize: 22, fontWeight: "bold", color: "green", textAlign: "center", marginBottom: 15 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5, borderColor: "gray" },
  button: { backgroundColor: "green", padding: 12, borderRadius: 5, alignItems: "center" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default AppointmentBooking;
