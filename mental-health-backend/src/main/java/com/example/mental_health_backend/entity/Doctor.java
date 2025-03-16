package com.example.mental_health_backend.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Represents a doctor in the system.
 * This minimal entity is used for establishing relationships with appointments and reports.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Unique identifier for the doctor

    // Unique username for doctor login (if authentication is needed)
    @Column(unique = true, nullable = false)
    private String username;

    // Full name of the doctor
    private String name;
}
