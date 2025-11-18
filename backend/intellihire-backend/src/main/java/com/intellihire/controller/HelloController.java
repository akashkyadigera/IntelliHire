package com.intellihire.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/ping")
    public String ping() {
        return "✅ IntelliHire Backend is running!";
    }
}

