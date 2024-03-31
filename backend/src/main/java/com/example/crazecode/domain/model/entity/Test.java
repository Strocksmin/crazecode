package com.example.crazecode.domain.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "problem_tests")
public class Test {

    @Id
    @Column(name = "test_id")
    private Long id;

    @Column(name = "expected_input")
    private String expected_input;
    @Column(name = "expected_output")
    private String expected_output;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="problem_id", nullable=false)
    private Problem problem;
}
