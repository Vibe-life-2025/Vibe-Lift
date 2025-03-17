import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Picker } from "react-native";

const AppointmentBookingScreen = () => {
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctors, setDoctors] = useState(["Dr. Smith", "Dr. Johnson", "Dr. Patel"]); // Mock doctor list

  const bookAppointment = () => {
    if (!patientName || !email || !selectedDoctor) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Simulating API request with setTimeout
    setTimeout(() => {
      Alert.alert("Success", `Appointment booked with ${selectedDoctor}`);
    }, 1000);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Patient Name:</Text>
      <TextInput value={patientName} onChangeText={setPatientName} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Select Doctor:</Text>
      <Picker selectedValue={selectedDoctor} onValueChange={setSelectedDoctor}>
        <Picker.Item label="Select a Doctor" value={null} />
        {doctors.map((doc, index) => (
          <Picker.Item key={index} label={doc} value={doc} />
        ))}
      </Picker>

      <Button title="Book Appointment" onPress={bookAppointment} />
    </View>
  );
};

export default AppointmentBookingScreen;
