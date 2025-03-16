package com.example.mentalhealth.repository;

import com.example.mentalhealth.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Repository interface for Report entity.
 * Provides CRUD operations and a custom method to find reports by patient name and doctor id.
 */
@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {

    /**
     * Retrieves all reports for a given patient and doctor.
     *
     * @param patientName the name of the patient.
     * @param doctorId the unique identifier of the doctor.
     * @return a list of matching reports.
     */
    List<Report> findByPatientNameAndDoctorId(String patientName, Long doctorId);
}
