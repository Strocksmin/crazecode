package com.example.crazecode.domain.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TokenStatusDto {
    private int testId;
    private String token;

    public TokenStatusDto(int testId, String token) {
        this.testId = testId;
        this.token = token;
    }

    @Override
    public String toString() {
        return "TokenStatusDto{" +
                "testId=" + testId +
                ", token='" + token + '\'' +
                '}';
    }
}
