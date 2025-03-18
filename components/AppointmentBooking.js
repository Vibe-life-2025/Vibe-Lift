import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker"; 
import { fetchDoctors, bookAppointment } from "../API/appointmentApi";

const AppointmentBooking = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [patientSituation, setPatientSituation] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await fetchDoctors();
      setDoctors(data);
      setLoading(false);
    };
    loadDoctors();
  }, []);

  const handleBooking = async () => {
    if (!selectedDoctor || !patientName || !patientAge || !email || !phoneNumber || !patientSituation || !appointmentDate) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const appointmentData = { 
      doctorId: selectedDoctor, 
      patientName, 
      patientAge, 
      email, 
      phoneNumber,
      patientSituation, 
      appointmentDate 
    };

    const result = await bookAppointment(appointmentData);
    Alert.alert(result.success ? "Success" : "Error", result.message);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Book an Appointment</Text>

        {loading ? (
          <Text>Loading doctors...</Text>
        ) : (
          <>
            <Text style={styles.label}>Select Doctor:</Text>
            <Picker selectedValue={selectedDoctor} onValueChange={setSelectedDoctor} style={styles.input}>
              <Picker.Item label="Choose a doctor" value={null} />
              {doctors.map((doc) => (
                <Picker.Item key={doc.id} label={doc.name} value={doc.id} />
              ))}
            </Picker>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Enter full name" 
                placeholderTextColor="#C8E6C9"
                onChangeText={setPatientName} 
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Age</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Enter age" 
                placeholderTextColor="#C8E6C9"
                onChangeText={setPatientAge} 
                keyboardType="numeric" 
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Enter email" 
                placeholderTextColor="#C8E6C9"
                onChangeText={setEmail} 
                keyboardType="email-address" 
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Enter phone number" 
                placeholderTextColor="#C8E6C9"
                onChangeText={setPhoneNumber} 
                keyboardType="phone-pad" 
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Patient's Situation</Text>
              <TextInput 
                style={[styles.input, styles.textArea]} 
                placeholder="Brief explanation about the situation" 
                placeholderTextColor="#C8E6C9"
                onChangeText={setPatientSituation} 
                multiline 
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Appointment Date & Time</Text>
              <TextInput 
                style={styles.input} 
                placeholder="YYYY-MM-DD HH:MM" 
                placeholderTextColor="#C8E6C9"
                onChangeText={setAppointmentDate} 
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button title="Book Appointment" onPress={handleBooking} color="#8B4513" />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { 
    flexGrow: 1, 
    paddingBottom: 30, 
  },
  container: { 
    padding: 20, 
    backgroundColor: "#FFF" 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#09D85F", 
    marginBottom: 10 
  },
  inputContainer: { 
    marginBottom: 10 
    
  },
  label: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#056F36", 
    marginBottom: 5 
  },
  input: { 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 5, 
    borderColor: "#ccc" 
  },
  textArea: { 
    height: 80, 
    textAlignVertical: "top" 
  },
  buttonContainer: {
    marginTop: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default AppointmentBooking;
