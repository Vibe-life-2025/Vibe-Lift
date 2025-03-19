package com.vibelift.vibelift_mentalhealth_app_new.service;

import com.vibelift.vibelift_mentalhealth_app_new.model.Doctor;
import com.vibelift.vibelift_mentalhealth_app_new.model.Patient;
import com.vibelift.vibelift_mentalhealth_app_new.repository.DoctorRepository;
import com.vibelift.vibelift_mentalhealth_app_new.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Doctor doctor = doctorRepository.findByUsername(username).orElse(null);
        Patient patient = patientRepository.findByUsername(username).orElse(null);

        if (doctor != null) {
            return new User(doctor.getUsername(), doctor.getPassword(), getAuthorities(doctor.getRole()));
        } else if (patient != null) {
            return new User(patient.getUsername(), patient.getPassword(), getAuthorities(patient.getRole()));
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

    /*Converts a role string into a list of GrantedAuthority objects
    This is used by Spring Security to determine the authorities (roles) of a user.
    @param role The role of the user (e.g., "DOCTOR" or "PATIENT").
    @return A list of GrantedAuthority objects representing the user's roles.
     */
    private List<GrantedAuthority> getAuthorities(String role) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        return authorities;
    }
}