package com.example.crazecode.domain.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
@Entity
@Table(name = "problemdescription")
public class ProblemDescription {

    @Id
    @Column(name = "description_id")
    private Long id;

    @Column(name = "number")
    private int number;
    @Column(name = "title")
    private String title;
    @Column(name = "problemstatement")
    private String statement;

    @Column(name = "conditions")
    private String conditions;

    @Column(name = "startercode")
    private String starterCode;

    @Column(name = "starterfunctionname")
    private String starterFunctionName;

    @JsonIgnore
    @OneToOne(mappedBy = "problemDescription")
    private Problem problem;

    @OneToMany(mappedBy = "problemDescription")
    private List<Example> examples;
}