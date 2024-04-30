package com.example.crazecode.domain.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "languages")
public class Language {
    @Id
    @Column(name = "language_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long language_id;
    @Column(name = "name")
    private String name;
    @Column(name = "compile_cmd")
    private String compile_cmd;
    @Column(name = "run_cmd")
    private String run_cmd;
    @Column(name = "source_file")
    private String source_file;
}
