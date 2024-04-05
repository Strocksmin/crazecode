package com.example.crazecode.domain.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class JudgeStatusDto implements Serializable {
    private int id;
    private String description;

    @Override
    public String toString() {
        return "JudgeStatusDto{" +
                "id=" + id +
                ", description='" + description + '\'' +
                '}';
    }
}
