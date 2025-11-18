package com.intellihire.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
public class AIController {

    @PostMapping("/ask")
    public ResponseEntity<?> askAI(@RequestBody Map<String, String> body) {

        String question = body.get("question");
        if (question == null || question.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Question is missing"));
        }

        // ❗ Instead of calling external API, return a dummy AI response
        String response = "AI Response: You asked → " + question;

        return ResponseEntity.ok(Map.of("answer", response));
    }
}
