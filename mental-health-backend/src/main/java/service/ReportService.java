package com.example.mentalhealth.service;

import com.example.mentalhealth.entity.Report;
import com.example.mentalhealth.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * Service class for managing patient reports.
 * Contains business logic to upload a new report and retrieve reports for a specific patient and doctor.
 */
@Service
@RequiredArgsConstructor  // Lombok generates a constructor with required arguments (reportRepository)
public class ReportService {

    private final ReportRepository reportRepository;

    /**
     * Uploads a new report.
     *
     * @param report the report details (including file path, doctor, and patient name).
     * @return the saved report entity.
     */
    public Report uploadReport(Report report) {
        return reportRepository.save(report);
    }

    /**
     * Retrieves all reports for a given patient uploaded by a specific doctor.
     *
     * @param patientName the name of the patient.
     * @param doctorId the unique identifier of the doctor.
     * @return a list of matching reports.
     */
    public List<Report> getReportsForDoctor(String patientName, Long doctorId) {
        return reportRepository.findByPatientNameAndDoctorId(patientName, doctorId);
    }
}
