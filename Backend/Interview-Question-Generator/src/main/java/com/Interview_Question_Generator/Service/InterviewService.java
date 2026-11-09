package com.Interview_Question_Generator.Service;

import com.google.genai.Client;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class InterviewService {

    private final Client client;

    public InterviewService(Client client) {
        this.client = client;
    }

    public String generateInterviewQA(String topic, String level) {

        String prompt = """
                Generate 10 interview questions and answers
                for %s at %s level.
                Format:
                Question:
                Answer:
                """.formatted(topic, level);

        return client.models.generateContent(
                "gemini-3.8-flash",
                prompt,
                null
        ).text();
    }
}
