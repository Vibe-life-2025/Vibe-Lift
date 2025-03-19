package com.vibelift.vibelift_mentalhealth_app_new.controller;

import com.vibelift.vibelift_mentalhealth_app_new.model.Patient;
import com.vibelift.vibelift_mentalhealth_app_new.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerPatient(@RequestBody Patient patient) {
        patient.setPassword(passwordEncoder.encode(patient.getPassword()));
        patient.setRole("PATIENT"); // Set role for patient
        patientRepository.save(patient);
        return ResponseEntity.ok("Patient registered successfully");
    }
}