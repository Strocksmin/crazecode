package com.example.crazecode.domain.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FrontendResponseDto {
    private int test_id;
    private String description;

    public FrontendResponseDto(int test_id, String description) {
        this.test_id = test_id;
        this.description = description;
    }

    public FrontendResponseDto() {

    }
}
