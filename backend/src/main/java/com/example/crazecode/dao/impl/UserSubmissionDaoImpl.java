package com.example.crazecode.dao.impl;

import com.example.crazecode.dao.UserSubmissionDao;
import com.example.crazecode.dao.UserSubmissionDao;
import com.example.crazecode.domain.model.entity.UserSubmission;
import com.example.crazecode.domain.model.entity.UserSubmission;
import org.springframework.stereotype.Repository;

@Repository
public class UserSubmissionDaoImpl extends AbstractDaoImpl<UserSubmission>
        implements UserSubmissionDao {

    @Override
    protected Class<UserSubmission> daoEntityClass() {
        return UserSubmission.class;
    }
}
