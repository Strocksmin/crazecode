package com.example.crazecode.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProblemController {

    @GetMapping()
    public String getHome() {
        return "Hello";
    }
}
