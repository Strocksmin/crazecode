package com.example.crazecode.service.impl;

import com.example.crazecode.dao.UserDao;
import com.example.crazecode.domain.model.entity.Problem;
import com.example.crazecode.domain.model.entity.User;
import com.example.crazecode.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@RequiredArgsConstructor
@Service
public class UserServiceImpl extends AbstractServiceImpl<User, UserDao> implements UserService {
    private final UserDao userDao;
    @Override
    protected UserDao getDefaultDao() {
        return userDao;
    }

    @Override
    protected Class<User> getDefaultEntityClass() {
        return User.class;
    }

    @Override
    public User getUserByLogin(String login) {
        return getDefaultDao().getAll().stream()
                .filter(user -> Objects.equals(user.getLogin(), login)).findFirst().get();
    }
}
