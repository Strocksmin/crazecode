package com.example.crazecode.domain.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TokenStatusDto {
    private int id;
    private String token;

    public TokenStatusDto(int id, String token) {
        this.id = id;
        this.token = token;
    }
}
