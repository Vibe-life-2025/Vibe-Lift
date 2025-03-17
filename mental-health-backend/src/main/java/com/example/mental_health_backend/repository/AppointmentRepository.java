package com.example.mentalhealth.repository;

import com.example.mentalhealth.entity.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * This repository provides basic CRUD operations for appointments.
 * We also have a method to find appointments by doctor ID.
 */
@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {
    List<Appointment> findByDoctor_Id(String doctorId);
}
