package com.example.demo.controller;

import com.example.demo.model.Appointment;
import com.example.demo.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Controller
public class AppointmentController {

    @GetMapping("/appoinment")
    public String appointment() {
        return "appoinment"; // returns appoinment.html
    }

    @Autowired
    private AppointmentRepository appointmentRepository;

    @PostMapping("/saveAppointment")
    public String saveAppointment(
            @RequestParam("patientName") String patientName,
            @RequestParam("age") int age,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("selectedDoctor") String selectedDoctor,
            @RequestParam("date") String date,
            @RequestParam("time") String time
    ) {
        // Parse date and time strings into LocalDate and LocalTime objects
        LocalDate appointmentDate = LocalDate.parse(date);
        LocalTime appointmentTime = LocalTime.parse(time);

        // Create and save appointment
        Appointment appointment = new Appointment();
        appointment.setPatientName(patientName);
        appointment.setAge(age);
        appointment.setPhoneNumber(phoneNumber);
        appointment.setSelectedDoctor(selectedDoctor);
        appointment.setAppointmentDate(appointmentDate);
        appointment.setAppointmentTime(appointmentTime);
        appointmentRepository.save(appointment);

        return "redirect:/appointmentConfirmation"; // Redirect to a success page
    }
    @GetMapping("/appointmentConfirmation")
    public String showSuccessPage() {
        return "appointmentConfirmation"; // Display the success page
    }
}
