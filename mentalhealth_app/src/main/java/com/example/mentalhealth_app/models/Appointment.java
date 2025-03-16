package com.example.mentalhealth_app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "appointments") // Ensure this annotation is present
public class Appointment {

    public enum Status {
        PENDING, CONFIRMED, CANCELLED
    }

    @Id
    private String id; // MongoDB unique ID

    private String doctorId; // This is REQUIRED for repository queries
    private String patientName;
    private String doctorName;
    private String date;
    private Status status;

    // Constructor
    public Appointment(String doctorId, String patientName, String doctorName, String date) {
        this.doctorId = doctorId;
        this.patientName = patientName;
        this.doctorName = doctorName;
        this.date = date;
        this.status = Status.PENDING; // Default status
    }

    // Getters & Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(String doctorId) {
        this.doctorId = doctorId;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
