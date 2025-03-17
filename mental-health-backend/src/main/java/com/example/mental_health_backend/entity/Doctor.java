package com.example.mentalhealth.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;

/**
 * Represents a doctor.
 * We keep it simple with just an id, username, and name.
 */
@Document(collection = "doctors")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {
    @Id
    private String id;         // MongoDB assigns a unique ID.
    private String username;   // Unique identifier (for login if needed).
    private String name;       // Doctor's full name.
}
