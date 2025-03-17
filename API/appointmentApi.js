import axios from "axios";

const API_BASE_URL = "http://your-backend-url.com/api";

// Fetch all registered doctors
export const fetchDoctors = async () => {
  const response = await axios.get(`${API_BASE_URL}/doctors`);
  return response.data;
};

// Book an appointment (linked to a doctor)
export const bookAppointment = async (appointmentData) => {
  const response = await axios.post(`${API_BASE_URL}/book-appointment`, appointmentData);
  return response.data;
};

// Fetch doctor-specific appointments
export const fetchDoctorAppointments = async (doctorId) => {
  const response = await axios.get(`${API_BASE_URL}/appointments?doctorId=${doctorId}`);
  return response.data;
};

// Approve or Decline an appointment
export const updateAppointmentStatus = async (appointmentId, status) => {
  await axios.put(`${API_BASE_URL}/appointments/${appointmentId}`, { status });
};
