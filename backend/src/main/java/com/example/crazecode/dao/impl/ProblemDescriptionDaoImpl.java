package com.example.crazecode.dao.impl;

import com.example.crazecode.dao.ProblemDescriptionDao;
import com.example.crazecode.domain.model.entity.ProblemDescription;
import org.springframework.stereotype.Repository;

@Repository
public class ProblemDescriptionDaoImpl extends AbstractDaoImpl<ProblemDescription>
        implements ProblemDescriptionDao {

    @Override
    protected Class<ProblemDescription> daoEntityClass() {
        return ProblemDescription.class;
    }
}
