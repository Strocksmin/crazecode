package com.example.crazecode.controller.restcontroller;

import com.example.crazecode.dao.impl.ProblemDaoImpl;
import com.example.crazecode.dao.impl.ProblemDescriptionDaoImpl;
import com.example.crazecode.domain.model.entity.ProblemDescription;
import com.example.crazecode.service.impl.ProblemDescriptionServiceImpl;
import com.example.crazecode.service.impl.ProblemServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WorkspaceController {

    ProblemDescriptionDaoImpl problemDescriptionDao;
    ProblemDescriptionServiceImpl problemDescriptionService;

    @Autowired
    public WorkspaceController(ProblemDescriptionServiceImpl problemDescriptionService,
                               ProblemDescriptionDaoImpl problemDescriptionDao) {
        this.problemDescriptionDao = problemDescriptionDao;
        this.problemDescriptionService = problemDescriptionService;
    }
    @GetMapping(value = "/problem/{id}")
    public ProblemDescription getProblemDescriptionById(@PathVariable("id") Long id) {
        return problemDescriptionService.getById(id);
    }
}