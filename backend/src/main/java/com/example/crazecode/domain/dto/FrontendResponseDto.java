package com.example.crazecode.domain.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FrontendResponseDto {
    private int test_id;
    private String description;
    private String memory;
    private String time;

    public FrontendResponseDto(int test_id, String description) {
        this.test_id = test_id;
        this.description = description;
    }

    public FrontendResponseDto() {

    }
}
