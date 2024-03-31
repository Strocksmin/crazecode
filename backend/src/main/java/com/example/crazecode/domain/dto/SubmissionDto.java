package com.example.crazecode.domain.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Setter
@Getter
public class SubmissionDto implements Serializable {
    private int language_id;
    private String source_code;
    private String expected_output;

    public SubmissionDto(int language_id, String source_code, String expected_output) {
        this.language_id = language_id;
        this.source_code = source_code;
        this.expected_output = expected_output;
    }

    @Override
    public String toString() {
        return "SubmissionDto{" +
                "language_id=" + language_id +
                ", source_code='" + source_code + '\'' +
                ", expected_output='" + expected_output + '\'' +
                '}';
    }
}
