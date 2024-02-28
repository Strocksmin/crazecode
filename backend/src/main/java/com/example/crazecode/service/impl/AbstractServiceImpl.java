package com.example.crazecode.service.impl;

import com.example.crazecode.dao.AbstractDao;
import com.example.crazecode.service.AbstractService;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Objects;

public abstract class AbstractServiceImpl<T, D extends AbstractDao<T>> implements AbstractService<T> {

    protected abstract D getDefaultDao();
    protected abstract Class<T> getDefaultEntityClass();

    @Override
    public T update(T element) {
        return getDefaultDao().update(element);
    }

    @Override
    public void deleteById(Long id) {
        getDefaultDao().delete(getDefaultDao().getById(id).get());
    }

    @Override
    public T getById(Long id) {
        return getDefaultDao().getById(id).get();
    }

    @Transactional
    @Override
    public void create(T element) {
        getDefaultDao().create(element);
    }

    @Override
    public List<T> getAll(Map<String, Object> fieldNamesAndValuesToSelectBy, String orderBy, boolean asc, int limit) {
        fieldNamesAndValuesToSelectBy.entrySet().removeIf(entry -> Objects.isNull(entry.getValue()));
        return getDefaultDao().getAll(fieldNamesAndValuesToSelectBy, orderBy, asc, limit);
    }

    @Override
    public List<T> getAll() {
        return getDefaultDao().getAll();
    }
}
