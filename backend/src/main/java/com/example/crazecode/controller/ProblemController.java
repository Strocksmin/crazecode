package com.example.crazecode.controller;

import com.example.crazecode.dao.impl.ProblemDaoImpl;
import com.example.crazecode.domain.model.entity.Problem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProblemController {
    @Autowired
    ProblemDaoImpl problemDao;
    @GetMapping()
    public String getHome() {
        return "Hello";
    }

    @GetMapping(value = "/{id}")
    public Problem getById(@PathVariable("id") Long id) {
        Problem problem = problemDao.getById(id).get();
        return problem;
    }
}
