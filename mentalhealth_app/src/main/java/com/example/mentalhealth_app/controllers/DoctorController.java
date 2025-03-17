package com.example.mentalhealth_app.controllers;

import com.example.mentalhealth_app.models.Doctor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    private List<Doctor> doctors = new ArrayList<>();

    public DoctorController() {
        // Adding some dummy doctors
        doctors.add(new Doctor("drsmith", "password123", "Psychiatrist"));
        doctors.add(new Doctor("drjane", "password456", "Therapist"));
    }

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        for (Doctor doctor : doctors) {
            if (doctor.getUsername().equals(username) && doctor.getPassword().equals(password)) {
                return "Login successful for " + doctor.getUsername();
            }
        }
        return "Invalid credentials!";
    }

    @GetMapping("/list")
    public List<Doctor> getDoctors() {
        return doctors;
    }
}
//Doctor is created here

