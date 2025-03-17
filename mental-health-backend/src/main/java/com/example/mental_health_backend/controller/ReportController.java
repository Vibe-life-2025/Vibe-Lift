package com.example.mentalhealth.controller;

import com.example.mentalhealth.entity.Report;
import com.example.mentalhealth.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * This controller exposes endpoints to manage reports.
 * You can upload a new report or get reports for a patient by a specific doctor.
 */
@RestController
@RequestMapping("/reports")
@RequiredArgsConstructor
public class ReportController {
    private final ReportService reportService;

    // Endpoint: Upload a new report.
    @PostMapping
    public ResponseEntity<Report> uploadReport(@RequestBody Report report) {
        Report uploadedReport = reportService.uploadReport(report);
        return ResponseEntity.ok(uploadedReport);
    }

    // Endpoint: Get reports for a patient from a particular doctor.
    @GetMapping("/{patientName}")
    public ResponseEntity<List<Report>> getReports(@PathVariable String patientName,
                                                   @RequestParam String doctorId) {
        List<Report> reports = reportService.getReportsForDoctor(patientName, doctorId);
        return ResponseEntity.ok(reports);
    }
}
