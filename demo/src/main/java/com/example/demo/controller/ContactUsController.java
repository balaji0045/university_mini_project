package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class ContactUsController {

        @GetMapping("/contactus")
        public String appointment() {
            return "contactus"; // returns appoinment.html
        }


}
