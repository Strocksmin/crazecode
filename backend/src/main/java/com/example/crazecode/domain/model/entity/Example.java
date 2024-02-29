package com.example.crazecode.domain.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "examples")
public class Example {

    @Id
    @Column(name = "example_id")
    private Long id;

    @Column(name = "input_text")
    private String input_text;
    @Column(name = "output_text")
    private String output_text;
    @Column(name = "explanation")
    private String explanation;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="problem_id", nullable=false)
    private ProblemDescription problemDescription;
}
