package com.example.crazecode.controller.restcontroller;

import com.example.crazecode.controller.mapper.ProblemMapper;
import com.example.crazecode.dao.impl.ProblemDaoImpl;
import com.example.crazecode.dao.impl.ProblemDescriptionDaoImpl;
import com.example.crazecode.domain.dto.ProblemDto;
import com.example.crazecode.domain.model.entity.Problem;
import com.example.crazecode.domain.model.entity.ProblemDescription;
import com.example.crazecode.service.impl.ProblemDescriptionServiceImpl;
import com.example.crazecode.service.impl.ProblemServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ProblemSetController {
    private final ProblemServiceImpl problemService;
    private final ProblemDaoImpl problemDao;
    private final ProblemMapper problemMapper;

    @Autowired
    public ProblemSetController(ProblemServiceImpl problemService, ProblemDaoImpl problemDao, ProblemMapper problemMapper) {
        this.problemService = problemService;
        this.problemDao = problemDao;
        this.problemMapper = problemMapper;
    }
    @GetMapping()
    public String getHome() {
        return "Hello";
    }

    @GetMapping(value = "/{id}")
    public ProblemDto getProblemById(@PathVariable("id") Long id) {
        Problem problem = problemService.getById(id);
        return problemMapper.convertToDto(problem);
    }

    @GetMapping(value = "/problems")
    public List<ProblemDto> getAllProblems() {
        return problemService.getAll().stream().map(problemMapper::convertToDto).collect(Collectors.toList());
    }

}
