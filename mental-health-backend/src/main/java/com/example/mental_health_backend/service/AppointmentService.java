package com.example.mentalhealth.service;

import com.example.mentalhealth.entity.Appointment;
import com.example.mentalhealth.entity.Appointment.AppointmentStatus;
import com.example.mentalhealth.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * This service handles the business logic for appointments.
 * It creates new appointments, fetches appointments for a doctor,
 * and updates appointment statuses.
 */
@Service
@RequiredArgsConstructor
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;

    // Creates an appointment with a default status of PENDING.
    public Appointment createAppointment(Appointment appointment) {
        appointment.setStatus(AppointmentStatus.PENDING);
        return appointmentRepository.save(appointment);
    }

    // Returns all appointments for a given doctor.
    public List<Appointment> getDoctorAppointments(String doctorId) {
        return appointmentRepository.findByDoctor_Id(doctorId);
    }

    // Updates an appointment's status (to APPROVED or DECLINED).
    public Appointment updateAppointmentStatus(String id, AppointmentStatus status) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));
        appointment.setStatus(status);
        return appointmentRepository.save(appointment);
    }
}
