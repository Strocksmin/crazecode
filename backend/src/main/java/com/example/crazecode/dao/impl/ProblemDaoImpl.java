package com.example.crazecode.dao.impl;

import com.example.crazecode.dao.AbstractDao;
import com.example.crazecode.dao.ProblemDao;
import com.example.crazecode.domain.model.entity.Problem;
import org.springframework.stereotype.Repository;

@Repository
public class ProblemDaoImpl extends AbstractDaoImpl<Problem> implements ProblemDao {

    @Override
    protected Class<Problem> daoEntityClass() {
        return Problem.class;
    }
}
