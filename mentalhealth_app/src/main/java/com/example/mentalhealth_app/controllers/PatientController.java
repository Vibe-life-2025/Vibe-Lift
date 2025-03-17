package com.example.mentalhealth_app.controllers;

import com.example.mentalhealth_app.models.Patien;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    private List<Patien> patients = new ArrayList<>();

    @PostMapping("/walk-in")
    public String walkIn(@RequestParam String name, @RequestParam int age, @RequestParam String issue) {
        Patien patient = new Patien(name, age, issue);
        patients.add(patient);
        return "Walk-in patient " + name + " has been registered.";
    }

    @GetMapping("/list")
    public List<Patien> getPatients() {
        return patients;
    }
}

