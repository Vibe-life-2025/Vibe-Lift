package com.example.mental_health_backend.repository;

import com.example.mental_health_backend.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Repository interface for Appointment entity.
 * Provides CRUD operations and a custom method to find appointments by doctor id.
 */
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    /**
     * Retrieves all appointments associated with a specific doctor.
     *
     * @param doctorId the unique identifier of the doctor.
     * @return a list of appointments for that doctor.
     */
    List<Appointment> findByDoctorId(Long doctorId);
}
