package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

    @Controller
    public class SignupController {
        @Autowired
        private UserRepository userRepository;

        @GetMapping("/signup")
        public String showSignupForm(Model model) {
            model.addAttribute("user", new User());
            return "signup"; // returns signup.html
        }

        @PostMapping("/signup")
        public String signup(@ModelAttribute("user") User user) {
            userRepository.save(user);
            return "redirect:/"; // redirect to index page after signup
        }
    }

