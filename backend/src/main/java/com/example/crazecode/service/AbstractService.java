package com.example.crazecode.service;

import org.springframework.lang.NonNull;

import java.util.List;
import java.util.Map;

public interface AbstractService<T> {
    void create (T element);

    T update (T element);

    void deleteById(Long id);

    List<T> getAll(@NonNull Map<String, Object> fieldNamesAndValuesToSelectBy,
                   String orderBy,
                   boolean asc,
                   int limit);

    T getById(Long id);

    List<T> getAll();
}
