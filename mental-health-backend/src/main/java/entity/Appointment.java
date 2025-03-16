package com.example.mentalhealth.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

/**
 * Represents a patient appointment with a doctor.
 * Stores patient name, the associated doctor, appointment date/time, and its status.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Unique identifier for the appointment

    // Name of the patient booking the appointment
    private String patientName;

    // Many appointments can be linked to one doctor.
    // This establishes a foreign key relationship with the Doctor entity.
    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    // Date and time of the appointment
    private LocalDateTime appointmentDate;

    // Status of the appointment: PENDING, APPROVED, or DECLINED.
    @Enumerated(EnumType.STRING)
    private AppointmentStatus status;

    /**
     * Enum representing possible appointment statuses.
     */
    public enum AppointmentStatus {
        PENDING,    // Appointment is awaiting approval.
        APPROVED,   // Appointment has been approved.
        DECLINED    // Appointment has been declined.
    }
}
