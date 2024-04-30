package com.example.crazecode.service.impl;

import com.example.crazecode.dao.UserSubmissionDao;
import com.example.crazecode.domain.model.entity.UserSubmission;
import com.example.crazecode.service.UserSubmissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserSubmissionServiceImpl extends AbstractServiceImpl<UserSubmission, UserSubmissionDao>
        implements UserSubmissionService {

    private final UserSubmissionDao userSubmissionDao;
    @Override
    protected UserSubmissionDao getDefaultDao() {
        return userSubmissionDao;
    }

    @Override
    protected Class<UserSubmission> getDefaultEntityClass() {
        return UserSubmission.class;
    }
}
