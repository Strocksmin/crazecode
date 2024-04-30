package com.example.crazecode.service.impl;

import com.example.crazecode.dao.LanguageDao;
import com.example.crazecode.domain.model.entity.Language;
import com.example.crazecode.service.LanguageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class LanguageServiceImpl extends AbstractServiceImpl<Language, LanguageDao>
        implements LanguageService {

    private final LanguageDao languageDao;
    @Override
    protected LanguageDao getDefaultDao() {
        return languageDao;
    }

    @Override
    protected Class<Language> getDefaultEntityClass() {
        return Language.class;
    }
}
