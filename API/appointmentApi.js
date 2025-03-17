import axios from "axios";

const API_BASE_URL = "http://your-backend-url.com/api"; // Replace with actual backend URL

// Book an appointment (Patient)
export const bookAppointment = async (appointmentData) => {
  const response = await axios.post(`${API_BASE_URL}/book-appointment`, appointmentData);
  return response.data;
};

// Fetch all doctor appointments (Doctor)
export const fetchAppointments = async () => {
  const response = await axios.get(`${API_BASE_URL}/appointments`);
  return response.data;
};

// Approve or Decline an appointment (Doctor)
export const updateAppointmentStatus = async (appointmentId, status) => {
  await axios.put(`${API_BASE_URL}/appointments/${appointmentId}`, { status });
};
