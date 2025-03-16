package com.example.mentalhealth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main entry point for the Mental Health Backend application.
 * The @SpringBootApplication annotation enables auto-configuration, component scanning, and configuration properties support.
 */
@SpringBootApplication
public class MentalHealthApplication {
    public static void main(String[] args) {
        SpringApplication.run(MentalHealthApplication.class, args);
    }
}
