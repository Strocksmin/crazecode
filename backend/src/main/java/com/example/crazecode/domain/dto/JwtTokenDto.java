package com.example.crazecode.domain.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class JwtTokenDto {

    private String login;
    private String value;

    public JwtTokenDto(String login, String value) {
        this.login = login;
        this.value = value;
    }
}
