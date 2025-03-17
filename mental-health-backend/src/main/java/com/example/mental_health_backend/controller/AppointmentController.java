package com.example.mentalhealth.controller;

import com.example.mentalhealth.entity.Appointment;
import com.example.mentalhealth.entity.Appointment.AppointmentStatus;
import com.example.mentalhealth.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * This controller exposes endpoints to manage appointments.
 * You can create an appointment, get all appointments for a doctor,
 * or update the status of an appointment.
 */
@RestController
@RequestMapping("/appointments")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;

    // Endpoint: Create a new appointment.
    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
        Appointment createdAppointment = appointmentService.createAppointment(appointment);
        return ResponseEntity.ok(createdAppointment);
    }

    // Endpoint: Get all appointments for a doctor.
    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<Appointment>> getDoctorAppointments(@PathVariable String doctorId) {
        List<Appointment> appointments = appointmentService.getDoctorAppointments(doctorId);
        return ResponseEntity.ok(appointments);
    }

    // Endpoint: Update the status of an appointment.
    @PutMapping("/{id}")
    public ResponseEntity<Appointment> updateStatus(@PathVariable String id,
                                                    @RequestParam AppointmentStatus status) {
        Appointment updatedAppointment = appointmentService.updateAppointmentStatus(id, status);
        return ResponseEntity.ok(updatedAppointment);
    }
}
