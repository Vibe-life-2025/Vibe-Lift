package com.example.mentalhealth_app.models;

public class Doctor {
    private String username;
    private String password;
    private String specialty;

    public Doctor(String username, String password, String specialty) {
        this.username = username;
        this.password = password;
        this.specialty = specialty;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }
}
