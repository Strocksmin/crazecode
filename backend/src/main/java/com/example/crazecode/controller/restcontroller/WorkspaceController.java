package com.example.crazecode.controller.restcontroller;

import com.example.crazecode.dao.impl.ProblemDescriptionDaoImpl;
import com.example.crazecode.domain.dto.SolutionDto;
import com.example.crazecode.domain.dto.SubmissionDto;
import com.example.crazecode.domain.dto.TokenDto;
import com.example.crazecode.domain.dto.TokenStatusDto;
import com.example.crazecode.domain.model.entity.ProblemDescription;
import com.example.crazecode.domain.model.entity.Test;
import com.example.crazecode.service.impl.ProblemDescriptionServiceImpl;
import com.example.crazecode.service.impl.ProblemServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.apache.el.parser.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

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
    public List<TokenStatusDto> solutionFromUser(@RequestBody SolutionDto solutionDto) {
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
        }

        return /*bodyValues.toSingleValueMap().toString()*/ tokenStatusDtos;
    }
}