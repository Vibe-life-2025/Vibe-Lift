package com.example.mentalhealth_app.controllers;

import com.example.mentalhealth_app.models.Appointment;
import com.example.mentalhealth_app.services.AppointmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//import java.util.Optional;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @GetMapping("/doctor/{doctorId}")
    public List<Appointment> getDoctorAppointments(@PathVariable String doctorId) {
        return appointmentService.getAppointmentsForDoctor(doctorId);
    }

    @PostMapping
    public ResponseEntity<Appointment> bookAppointment(@RequestBody Appointment appointment) {
        Appointment createdAppointment = appointmentService.createAppointment(appointment);
        return ResponseEntity.ok(createdAppointment);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<String> updateAppointmentStatus(@PathVariable String id, @RequestParam String status) {
        appointmentService.updateAppointmentStatus(id, Appointment.Status.valueOf(status.toUpperCase()));
        return ResponseEntity.ok("Appointment status updated.");
    }
}
//Appointment controlled
