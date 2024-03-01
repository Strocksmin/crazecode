package com.example.crazecode.service.impl;

import com.example.crazecode.dao.ProblemDescriptionDao;
import com.example.crazecode.domain.model.entity.ProblemDescription;
import com.example.crazecode.service.ProblemDescriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ProblemDescriptionServiceImpl extends AbstractServiceImpl<ProblemDescription, ProblemDescriptionDao>
        implements ProblemDescriptionService {

    private final ProblemDescriptionDao problemDescriptionDao;

    @Override
    protected ProblemDescriptionDao getDefaultDao() {
        return problemDescriptionDao;
    }

    @Override
    protected Class<ProblemDescription> getDefaultEntityClass() {
        return ProblemDescription.class;
    }
}
