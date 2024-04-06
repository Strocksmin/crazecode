package com.example.crazecode.service;

import com.example.crazecode.domain.model.entity.User;

public interface UserService extends AbstractService<User> {
    User getUserByLogin(String login);
}
