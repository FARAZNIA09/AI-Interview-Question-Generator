package com.Interview_Question_Generator.Config;

import com.google.genai.Client;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class GeminiConfig {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Bean
    public Client client() {
        System.out.println("API KEY = " + apiKey);

        return Client.builder()
                .apiKey(apiKey)
                .build();
    }
}