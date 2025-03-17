package com.example.mentalhealth.service;

import com.example.mentalhealth.entity.Report;
import com.example.mentalhealth.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * This service handles the business logic for reports.
 * It allows uploading a report and fetching reports for a patient by a specific doctor.
 */
@Service
@RequiredArgsConstructor
public class ReportService {
    private final ReportRepository reportRepository;

    // Uploads a new report.
    public Report uploadReport(Report report) {
        return reportRepository.save(report);
    }

    // Returns all reports for a given patient uploaded by a specific doctor.
    public List<Report> getReportsForDoctor(String patientName, String doctorId) {
        return reportRepository.findByPatientNameAndDoctor_Id(patientName, doctorId);
    }
}
