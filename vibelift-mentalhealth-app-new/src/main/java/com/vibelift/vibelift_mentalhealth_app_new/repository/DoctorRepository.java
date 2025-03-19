package com.vibelift.vibelift_mentalhealth_app_new.repository;

import com.vibelift.vibelift_mentalhealth_app_new.model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DoctorRepository extends MongoRepository<Doctor, String> {
}