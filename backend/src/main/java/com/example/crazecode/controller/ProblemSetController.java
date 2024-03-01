package com.example.crazecode.controller;

import com.example.crazecode.dao.impl.ProblemDaoImpl;
import com.example.crazecode.dao.impl.ProblemDescriptionDaoImpl;
import com.example.crazecode.domain.model.entity.Problem;
import com.example.crazecode.domain.model.entity.ProblemDescription;
import com.example.crazecode.service.impl.ProblemDescriptionServiceImpl;
import com.example.crazecode.service.impl.ProblemServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProblemSetController {
    ProblemServiceImpl problemService;
    ProblemDaoImpl problemDao;

    @Autowired
    public ProblemSetController(ProblemServiceImpl problemService, ProblemDaoImpl problemDao) {
        this.problemService = problemService;
        this.problemDao = problemDao;

    }
    @GetMapping()
    public String getHome() {
        return "Hello";
    }

    @GetMapping(value = "/{id}")
    public Problem getProblemById(@PathVariable("id") Long id) {
        return problemService.getById(id);
    }

    @GetMapping(value = "/problems")
    public List<Problem> getAllProblems() {
        return problemService.getAll();
    }

}
