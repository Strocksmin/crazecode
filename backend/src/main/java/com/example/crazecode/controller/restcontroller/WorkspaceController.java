package com.example.crazecode.controller.restcontroller;

import com.example.crazecode.dao.impl.ProblemDescriptionDaoImpl;
import com.example.crazecode.domain.dto.*;
import com.example.crazecode.domain.model.entity.ProblemDescription;
import com.example.crazecode.domain.model.entity.Test;
import com.example.crazecode.service.impl.ProblemDescriptionServiceImpl;
import com.example.crazecode.service.impl.ProblemServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.*;

@Slf4j
@RestController
public class WorkspaceController {

    private final ProblemDescriptionDaoImpl problemDescriptionDao;
    private final ProblemDescriptionServiceImpl problemDescriptionService;
    private final ProblemServiceImpl problemService;
    private final WebClient apiClient;

    @Autowired
    public WorkspaceController(ProblemDescriptionServiceImpl problemDescriptionService,
                               ProblemDescriptionDaoImpl problemDescriptionDao,
                               WebClient apiClient,
                               ProblemServiceImpl problemService) {
        this.problemDescriptionDao = problemDescriptionDao;
        this.problemDescriptionService = problemDescriptionService;
        this.apiClient = apiClient;
        this.problemService = problemService;
    }

    @GetMapping(value = "/problem/{id}")
    public ProblemDescription getProblemDescriptionById(@PathVariable("id") Long id) {
        return problemDescriptionService.getById(id);
    }

    @PostMapping(value = "/submit")
    public TokenDto postCodeFromUser(@RequestBody SolutionDto request) {
        MultiValueMap<String, String> bodyValues = new LinkedMultiValueMap<>();

        bodyValues.add("language_id", "74");
        bodyValues.add("source_code", "ASDKGOTZXFQOP54P29AXL");

        TokenDto token = apiClient
                .post()
                .uri("/submissions/")
                .header("X-Judge0-Token", "mySecretToken")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .accept(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromFormData(bodyValues))
                .retrieve()
                .bodyToMono(TokenDto.class)
                .block();

        return token;
    }

    @PostMapping(value = "/solution")
    public FrontendResponseDto solutionFromUser(@RequestBody SolutionDto solutionDto) {
        List<SubmissionDto> submissions = new ArrayList<>();
        int languageId = solutionDto.getLanguage_id();
        String sourceCode = solutionDto.getSource_code() + "\n";
        int lengthOfTests = problemService.getById(solutionDto.getProblem_id()).getTests().size();
        List<Test> tests = problemService.getById(solutionDto.getProblem_id()).getTests();

        for (int i = 0; i < lengthOfTests; i++) {
            Test test = tests.get(i);
            submissions.add(new SubmissionDto(languageId, sourceCode + test.getExpected_output(), test.getExpected_output()));
        }

        MultiValueMap<String, List<SubmissionDto>> bodyValues = new LinkedMultiValueMap<>();
        bodyValues.add("submissions", submissions);

        List<TokenDto> list = apiClient
                .post()
                .uri("/submissions/batch")
                .header("X-Judge0-Token", "mySecretToken")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(bodyValues.toSingleValueMap()))
                .retrieve()
                .bodyToFlux(TokenDto.class).collectList().block();

        List<TokenStatusDto> tokenStatusDtos = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            tokenStatusDtos.add(new TokenStatusDto(i + 1, list.get(i).getToken()));
        } // 200ms


        StringBuilder submissionsToken = new StringBuilder();
        submissionsToken.append(tokenStatusDtos.get(0).getToken());
        for (int i = 1; i < tokenStatusDtos.size(); i++) {
            submissionsToken.append("," + tokenStatusDtos.get(i).getToken());
        }

        BatchReponseDto batchReponseDto = apiClient // batch request
                .get()
                .uri("/submissions/batch?tokens=" + submissionsToken)
                .header("X-Judge0-Token", "mySecretToken")
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(BatchReponseDto.class)
                .delayElement(Duration.ofMillis(100))
                .repeat()
                .skipUntil(response -> response.getSubmissions()
                        .stream().anyMatch(judgeResponseDto -> judgeResponseDto.getStatus().getId() > 2 && judgeResponseDto.getStatus().getId() != 3))
                .blockFirst();

        FrontendResponseDto responseDto = new FrontendResponseDto(0, "All tests passed!");
        for (JudgeResponseDto dto : batchReponseDto.getSubmissions()) {
            int id = dto.getStatus().getId();
            if (id != 3 && id > 2) {
                responseDto.setDescription(dto.getCompile_output());
                for (TokenStatusDto dto1 : tokenStatusDtos) {
                    if (dto1.getToken().equals(dto.getToken()))
                        responseDto.setTest_id(dto1.getTestId());
                }
            }
        }

        return responseDto;
    }

    @PostMapping(value = "/solutionTest")
    public BatchReponseDto solutionFromUserTest(@RequestBody SolutionDto solutionDto) {
        List<SubmissionDto> submissions = new ArrayList<>();
        int languageId = solutionDto.getLanguage_id();
        String sourceCode = solutionDto.getSource_code() + "\n";
        int lengthOfTests = problemService.getById(solutionDto.getProblem_id()).getTests().size();
        List<Test> tests = problemService.getById(solutionDto.getProblem_id()).getTests();

        for (int i = 0; i < lengthOfTests; i++) {
            Test test = tests.get(i);
            submissions.add(new SubmissionDto(languageId, sourceCode + test.getExpected_output(), test.getExpected_output()));
        }

        MultiValueMap<String, List<SubmissionDto>> bodyValues = new LinkedMultiValueMap<>();
        bodyValues.add("submissions", submissions);

        List<TokenDto> list = apiClient
                .post()
                .uri("/submissions/batch")
                .header("X-Judge0-Token", "mySecretToken")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(bodyValues.toSingleValueMap()))
                .retrieve()
                .bodyToFlux(TokenDto.class).collectList().block();

        List<TokenStatusDto> tokenStatusDtos = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            tokenStatusDtos.add(new TokenStatusDto(i + 1, list.get(i).getToken()));
        } // 200ms


        StringBuilder submissionsToken = new StringBuilder();
        submissionsToken.append(tokenStatusDtos.get(0).getToken());
        for (int i = 1; i < tokenStatusDtos.size(); i++) {
            submissionsToken.append("," + tokenStatusDtos.get(i).getToken());
        }
        BatchReponseDto batchReponseDto = new BatchReponseDto();
        System.out.println("Старт " + new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()));
        for (int i = 0; i < 3; i++) {
            System.out.println(apiClient
                    .get()
                    .uri("/submissions/batch?tokens=" + submissionsToken)
                    .header("X-Judge0-Token", "mySecretToken")
                    .accept(MediaType.APPLICATION_JSON)
                    .retrieve()
                    .bodyToMono(BatchReponseDto.class)
                    .block().toString());
            try {Thread.sleep(2500);} catch (Exception ignored) {}
        }
        System.out.println("Финиш " + new SimpleDateFormat("HH-mm-ss").format(Calendar.getInstance().getTime()));

        /*JudgeResponseDto judgeResponseDto = apiClient // by one request
                .get()
                .uri("/submissions/" + tokenStatusDtos.get(0).getToken())
                .header("X-Judge0-Token", "mySecretToken")
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(JudgeResponseDto.class)
                .delayElement(Duration.ofMillis(100))
                .repeat()
                .skipUntil(response -> response.getStatus().getId() > 2)
                .limitRequest(1)
                .blockFirst();*/

        return batchReponseDto;
    }
}