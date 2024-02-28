package com.example.crazecode.service.impl;

import com.example.crazecode.dao.AbstractDao;
import com.example.crazecode.service.AbstractService;
import jakarta.transaction.Transactional;

public abstract class AbstractServiceImpl<T, D extends AbstractDao<T>> implements AbstractService<T> {

    protected abstract D getDefaultDao();
    protected abstract Class<T> getDefaultEntityClass();

    @Transactional
    @Override
    public void create(T element) {
        getDefaultDao().create(element);
    }
}
