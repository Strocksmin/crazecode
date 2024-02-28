package com.example.crazecode.service.impl;

import com.example.crazecode.dao.ProblemDao;
import com.example.crazecode.domain.model.entity.Problem;
import com.example.crazecode.service.ProblemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class ProblemServiceImpl extends AbstractServiceImpl<Problem, ProblemDao> implements ProblemService {

    private final ProblemDao problemDao;
    @Override
    protected ProblemDao getDefaultDao() {
        return problemDao;
    }

    @Override
    protected Class<Problem> getDefaultEntityClass() {
        return Problem.class;
    }
}
