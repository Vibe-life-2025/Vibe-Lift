package com.example.mentalhealth.repository;

import com.example.mentalhealth.entity.Report;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * This repository provides basic CRUD operations for reports.
 * We also have a method to find reports by patient name and doctor ID.
 */
@Repository
public interface ReportRepository extends MongoRepository<Report, String> {
    List<Report> findByPatientNameAndDoctor_Id(String patientName, String doctorId);
}
