package com.example.mentalhealth.controller;

import com.example.mentalhealth.entity.Report;
import com.example.mentalhealth.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * REST Controller for managing patient reports.
 * Provides endpoints to upload a new report and retrieve reports for a specific patient.
 */
@RestController
@RequestMapping("/reports")
@RequiredArgsConstructor  // Lombok generates a constructor with required arguments (reportService)
public class ReportController {

    private final ReportService reportService;

    /**
     * Uploads a new patient report.
     * Expects report details (file path, doctor, patient name) in the request body.
     *
     * @param report the report details.
     * @return the saved report entity.
     */
    @PostMapping
    public ResponseEntity<Report> uploadReport(@RequestBody Report report) {
        Report uploadedReport = reportService.uploadReport(report);
        return ResponseEntity.ok(uploadedReport);
    }

    /**
     * Retrieves all reports for a given patient uploaded by a specific doctor.
     * The patient's name is provided as a path variable, and the doctor's id as a request parameter.
     *
     * @param patientName the name of the patient.
     * @param doctorId the unique identifier of the doctor.
     * @return a list of matching reports.
     */
    @GetMapping("/{patientName}")
    public ResponseEntity<List<Report>> getReports(@PathVariable String patientName,
                                                   @RequestParam Long doctorId) {
        List<Report> reports = reportService.getReportsForDoctor(patientName, doctorId);
        return ResponseEntity.ok(reports);
    }
}
