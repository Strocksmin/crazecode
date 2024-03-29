package com.example.crazecode.dao.impl;

import com.example.crazecode.dao.AbstractDao;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import org.springframework.lang.NonNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public abstract class AbstractDaoImpl<T> implements AbstractDao<T> {
    @PersistenceContext
    protected EntityManager entityManager;

    protected abstract Class<T> daoEntityClass();

    @Override
    public void create(T element) {
        entityManager.persist(element);
    }

    @Override
    public Optional<T> getById(Long id) {
        return Optional.ofNullable(entityManager.find(daoEntityClass(), id));
    }

    @Override
    public T update(T element) {
        return entityManager.merge(element);
    }

    @Override
    public void delete(T element) {
        entityManager.remove(element);
    }

    @Override
    public List<T> getAll(@NonNull Map<String, Object> mapOfFieldNamesAndValuesToSelectBy,
                          String orderBy,
                          boolean asc,
                          int limit) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(daoEntityClass());
        Root<T> tRoot = criteriaQuery.from(daoEntityClass());


        List<Predicate> predicates = new ArrayList<>();
        mapOfFieldNamesAndValuesToSelectBy.forEach((key, value) ->
                predicates.add(criteriaBuilder.equal(tRoot.get(key), value)));

        TypedQuery<T> query = entityManager.createQuery(criteriaQuery
                .select(tRoot)
                .where(predicates.toArray(new Predicate[]{}))
        );

        return query
                .setMaxResults(limit)
                .getResultList();
    }

    @Override
    public List<T> getAll() {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(daoEntityClass());
        Root<T> tRoot = criteriaQuery.from(daoEntityClass());

        TypedQuery<T> query = entityManager.createQuery(criteriaQuery
                .select(tRoot)
        );

        return query.getResultList();
    }
}
