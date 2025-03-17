import axios from "axios";

const API_BASE_URL = "http://your-backend-url.com/api"; // Replace with actual backend URL

// Default doctors (used if backend is unavailable)
const defaultDoctors = [
  { id: "1", name: "Dr. Alice Smith", specialty: "Psychiatrist" },
  { id: "2", name: "Dr. John Doe", specialty: "Therapist" },
];

// Default appointments (used if backend is unavailable)
const defaultAppointments = [
  { id: "101", doctorId: "1", patientName: "Jane Doe", appointmentDate: "2025-03-15 10:00 AM", status: "Pending" },
  { id: "102", doctorId: "2", patientName: "Mark Lee", appointmentDate: "2025-03-16 02:00 PM", status: "Pending" },
];

// Helper function to check if the backend is reachable
const isBackendAvailable = async () => {
  try {
    await axios.get(`${API_BASE_URL}/health`); // Assuming your backend has a health check endpoint
    return true;
  } catch (error) {
    return false;
  }
};

// Fetch doctors with fallback
export const fetchDoctors = async () => {
  const backendAvailable = await isBackendAvailable();
  if (!backendAvailable) {
    console.log("Backend not available. Using default doctors.");
    return defaultDoctors;
  }

  const response = await axios.get(`${API_BASE_URL}/doctors`);
  return response.data;
};

// Fetch appointments with fallback
export const fetchAppointments = async (doctorId) => {
  const backendAvailable = await isBackendAvailable();
  if (!backendAvailable) {
    console.log("Backend not available. Using default appointments.");
    return defaultAppointments.filter((appt) => appt.doctorId === doctorId);
  }

  const response = await axios.get(`${API_BASE_URL}/appointments?doctorId=${doctorId}`);
  return response.data;
};

// Book an appointment
export const bookAppointment = async (appointmentData) => {
  const backendAvailable = await isBackendAvailable();
  if (!backendAvailable) {
    console.log("Backend not available. Appointment will not be saved.");
    return { success: false, message: "Offline mode: Appointment not saved" };
  }

  const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData);
  return response.data;
};

// Update appointment status
export const updateAppointmentStatus = async (appointmentId, status) => {
  const backendAvailable = await isBackendAvailable();
  if (!backendAvailable) {
    console.log("Backend not available. Cannot update appointment status.");
    return { success: false, message: "Offline mode: Status update not possible" };
  }

  await axios.put(`${API_BASE_URL}/appointments/${appointmentId}`, { status });
};
