package com.example.demo.model;

import jakarta.persistence.*;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Table
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String patientName;
    private int age;
    private String phoneNumber;
    private String selectedDoctor;
    private LocalDate date;
    private LocalTime time;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getSelectedDoctor() {
        return selectedDoctor;
    }

    public void setSelectedDoctor(String selectedDoctor) {
        this.selectedDoctor = selectedDoctor;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }
    public LocalDate getAppointmentDate() {
        return date;
    }

    public void setAppointmentDate(LocalDate appointmentDate) {
        this.date = appointmentDate;
    }

    public LocalTime getAppointmentTime() {
        return time;
    }

    public void setAppointmentTime(LocalTime appointmentTime) {
        this.time = appointmentTime;
    }

}
