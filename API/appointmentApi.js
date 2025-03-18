import axios from "axios";

const API_BASE_URL = "http://your-backend-url.com/api"; // Replace with actual backend URL

// Default doctors for offline testing
const defaultDoctors = [
  { id: "1", name: "Dr. John Doe" },
  { id: "2", name: "Dr. Jane Smith" },
];

// Fetch all registered doctors (handles offline and online modes)
export const fetchDoctors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/doctors`);
    return Array.isArray(response.data) ? response.data : defaultDoctors;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return defaultDoctors;
  }
};

// Book an appointment
export const bookAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData);
    return response.data;
  } catch (error) {
    console.error("Error booking appointment:", error);
    return { success: false, message: "Could not book appointment" };
  }
};

// Fetch all appointments for a doctor
export const fetchAppointments = async (doctorId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/appointments?doctorId=${doctorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return [];
  }
};

// Approve or Decline an appointment
export const updateAppointmentStatus = async (appointmentId, status) => {
  try {
    await axios.put(`${API_BASE_URL}/appointments/${appointmentId}`, { status });
    return { success: true, message: `Appointment ${status}` };
  } catch (error) {
    console.error("Error updating appointment status:", error);
    return { success: false, message: "Could not update appointment status" };
  }
};
