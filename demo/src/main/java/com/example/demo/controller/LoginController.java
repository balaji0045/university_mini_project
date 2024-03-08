package com.example.demo.controller;

import com.example.demo.model.Appointment;
import com.example.demo.model.User;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class LoginController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AppointmentRepository appointmentRepository;


    @GetMapping("/login")
    public String showLoginForm(Model model) {
        model.addAttribute("user", new User());
//        model.addAttribute("appointment", new Appointment()); // Add appointment object to model

        return "login"; // returns login.html
    }

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password, Model model) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            model.addAttribute("user", user); // Add user object to model
//            model.addAttribute("appointment", new Appointment()); // Add appointment object to model


            return "personal"; // Render personal.html page
        } else {
            return "redirect:/error"; // Redirect to error page
        }
    }

//
}
