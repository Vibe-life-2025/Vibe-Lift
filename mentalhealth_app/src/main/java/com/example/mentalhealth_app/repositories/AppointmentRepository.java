package com.example.mentalhealth_app.repositories;

import com.example.mentalhealth_app.models.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository  // This helps Spring Boot detect it as a repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {
    List<Appointment> findByDoctorId(String doctorId);
}