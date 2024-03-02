package com.example.crazecode.domain.dto;

import com.example.crazecode.domain.model.entity.ProblemDescription;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProblemDto {
    private Long problem_id;
    private String title;
    private String complexity;
    private List<String> tags;

}
