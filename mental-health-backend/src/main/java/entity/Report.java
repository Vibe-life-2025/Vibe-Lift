package com.example.mentalhealth.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

/**
 * Represents a patient report uploaded by a doctor.
 * Contains file path, associated doctor, patient name, and upload timestamp.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Unique identifier for the report

    // Many reports can be linked to one doctor.
    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    // Name of the patient for whom the report is uploaded
    private String patientName;

    // File path or URL where the report file is stored
    private String filePath;

    // Timestamp when the report was uploaded; default is the current time.
    private LocalDateTime uploadedAt = LocalDateTime.now();
}
