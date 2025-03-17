package com.example.mentalhealth.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import lombok.*;
import java.time.LocalDateTime;

/**
 * Represents a patient report.
 * Contains the file location, the doctor who uploaded it, the patient’s name, and the time of upload.
 */
@Document(collection = "reports")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Report {
    @Id
    private String id;  // Unique report ID.

    @DBRef
    private Doctor doctor;  // Doctor who uploaded this report.

    private String patientName;  // The patient related to the report.

    private String filePath;  // Location or URL of the report file.

    private LocalDateTime uploadedAt = LocalDateTime.now();  // Time when the report was uploaded.
}
