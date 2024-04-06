package com.example.crazecode.dao.impl;

import com.example.crazecode.dao.UserDao;
import com.example.crazecode.domain.model.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
public class UserDaoImpl extends AbstractDaoImpl<User> implements UserDao {
    @Override
    protected Class<User> daoEntityClass() {
        return User.class;
    }
}
