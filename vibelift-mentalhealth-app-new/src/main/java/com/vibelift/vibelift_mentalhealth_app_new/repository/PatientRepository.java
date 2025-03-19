package com.vibelift.vibelift_mentalhealth_app_new.repository;

import com.vibelift.vibelift_mentalhealth_app_new.model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface PatientRepository extends MongoRepository<Patient, String> {
    Optional<Patient> findByUsername(String username);
}