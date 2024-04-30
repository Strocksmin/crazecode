package com.example.crazecode.dao.impl;

import com.example.crazecode.dao.LanguageDao;
import com.example.crazecode.domain.model.entity.Language;
import org.springframework.stereotype.Repository;

@Repository
public class LanguageDaoImpl extends AbstractDaoImpl<Language>
        implements LanguageDao {

    @Override
    protected Class<Language> daoEntityClass() {
        return Language.class;
    }
}
