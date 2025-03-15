package com.example.mentalhealth_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.mentalhealth_app")  // Ensure correct scanning
public class MentalhealthApplication {

	public static void main(String[] args) {
		SpringApplication.run(MentalhealthApplication.class, args);
	}

}
