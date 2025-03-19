package com.vibelift.vibelift_mentalhealth_app_new.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctors")
public class Doctor {
    @Id
    private String id;

    private String username;
    private String password;
    private String role; // Role field (e.g., "DOCTOR")
}