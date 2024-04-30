package com.example.crazecode.domain.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class JudgeResponseDto implements Serializable {
    private String stdout;
    private String time;
    private String memory;
    private String stderr;
    private String token;
    private String compile_output;
    private String message;
    private JudgeStatusDto status;

    @Override
    public String toString() {
        return "JudgeResponseDto{" +
                "token='" + token + '\'' +
                ", status=" + status +
                '}';
    }
}
