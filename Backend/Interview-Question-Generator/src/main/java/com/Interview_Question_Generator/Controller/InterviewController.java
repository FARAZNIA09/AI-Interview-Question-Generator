package com.Interview_Question_Generator.Controller;



import com.Interview_Question_Generator.dto.InterviewRequest;
import com.Interview_Question_Generator.dto.InterviewResponse;
import com.Interview_Question_Generator.Service.InterviewService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/interview")
@CrossOrigin(origins = "http://localhost:5173")
public class InterviewController {

    private final InterviewService interviewService;

    public InterviewController(InterviewService interviewService) {
        this.interviewService = interviewService;
    }

    @PostMapping("/generate")
    public InterviewResponse generateQuestions(
            @RequestBody InterviewRequest request) {

        String result = interviewService.generateInterviewQA(
                request.getTopic(),
                request.getLevel());

        return new InterviewResponse(result);
    }
}
