package com.example.mentalhealth.service;

import com.example.mentalhealth.entity.Appointment;
import com.example.mentalhealth.entity.Appointment.AppointmentStatus;
import com.example.mentalhealth.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * Service class for managing appointments.
 * Contains business logic to create an appointment, retrieve appointments for a doctor,
 * and update the status of an appointment.
 */
@Service
@RequiredArgsConstructor  // Lombok generates a constructor with required arguments (appointmentRepository)
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    /**
     * Creates a new appointment.
     * The appointment is saved with a default status of PENDING.
     *
     * @param appointment the appointment details provided by the client.
     * @return the saved appointment entity.
     */
    public Appointment createAppointment(Appointment appointment) {
        appointment.setStatus(AppointmentStatus.PENDING); // Set default status
        return appointmentRepository.save(appointment);
    }

    /**
     * Retrieves all appointments for a specific doctor.
     *
     * @param doctorId the unique identifier of the doctor.
     * @return a list of appointments linked to that doctor.
     */
    public List<Appointment> getDoctorAppointments(Long doctorId) {
        return appointmentRepository.findByDoctorId(doctorId);
    }

    /**
     * Updates the status of an existing appointment.
     *
     * @param id the unique identifier of the appointment.
     * @param status the new status (APPROVED or DECLINED).
     * @return the updated appointment entity.
     * @throws RuntimeException if the appointment is not found.
     */
    public Appointment updateAppointmentStatus(Long id, AppointmentStatus status) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));
        appointment.setStatus(status);
        return appointmentRepository.save(appointment);
    }
}
