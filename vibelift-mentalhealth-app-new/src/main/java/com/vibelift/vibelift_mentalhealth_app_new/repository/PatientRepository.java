package com.vibelift.vibelift_mentalhealth_app_new.repository;

import com.vibelift.vibelift_mentalhealth_app_new.model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient, String> {
}