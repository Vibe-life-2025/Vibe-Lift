package com.vibelift.vibelift_mentalhealth_app_new.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patients")
public class Patient {
    @Id
    private String id;

    private String username;
    private String password;
    private String role; // Role field (e.g., "PATIENT")
}