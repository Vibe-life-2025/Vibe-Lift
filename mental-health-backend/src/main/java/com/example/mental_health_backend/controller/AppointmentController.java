package com.example.mental_health_backend.controller;

import com.example.mental_health_backend.entity.Appointment;
import com.example.mental_health_backend.entity.Appointment.AppointmentStatus;
import com.example.mental_health_backend.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * REST Controller for managing appointments.
 * Provides endpoints to create, retrieve, and update appointments.
 */
@RestController
@RequestMapping("/appointments")
@RequiredArgsConstructor  // Lombok generates a constructor with required arguments (appointmentService)
public class AppointmentController {

    private final AppointmentService appointmentService;

    /**
     * Creates a new appointment.
     * Expects appointment details (patient name, doctor, appointment date) in the request body.
     *
     * @param appointment the appointment details.
     * @return the created appointment with generated id and PENDING status.
     */
    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
        Appointment createdAppointment = appointmentService.createAppointment(appointment);
        return ResponseEntity.ok(createdAppointment);
    }

    /**
     * Retrieves all appointments for a specific doctor.
     *
     * @param doctorId the unique identifier of the doctor.
     * @return a list of appointments for the doctor.
     */
    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<Appointment>> getDoctorAppointments(@PathVariable Long doctorId) {
        List<Appointment> appointments = appointmentService.getDoctorAppointments(doctorId);
        return ResponseEntity.ok(appointments);
    }

    /**
     * Updates the status of an existing appointment.
     * Allows changing the status to APPROVED or DECLINED.
     *
     * @param id the unique identifier of the appointment.
     * @param status the new status as a request parameter.
     * @return the updated appointment entity.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Appointment> updateStatus(@PathVariable Long id,
                                                    @RequestParam AppointmentStatus status) {
        Appointment updatedAppointment = appointmentService.updateAppointmentStatus(id, status);
        return ResponseEntity.ok(updatedAppointment);
    }
}
