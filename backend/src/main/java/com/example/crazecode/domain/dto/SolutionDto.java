package com.example.crazecode.domain.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Setter
@Getter
public class SolutionDto implements Serializable {
    private Long user_id;
    private Long language_id;
    private String source_code;
    private Long problem_id;

    @Override
    public String toString() {
        return "SolutionDto{" +
                "language_id=" + language_id +
                ", source_code='" + source_code + '\'' +
                '}';
    }
}
