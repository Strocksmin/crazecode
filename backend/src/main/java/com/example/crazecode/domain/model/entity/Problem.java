package com.example.crazecode.domain.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "problem")
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long problem_id;

    @Column(name = "title")
    private String title;

    @Column(name = "complexity")
    private String complexity;

    @Fetch(FetchMode.JOIN)
    @ElementCollection
    @CollectionTable(name = "problem_tags", joinColumns = @JoinColumn(name = "problem_id"))
    @Column(name = "tag")
    private List<String> tags;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "description", referencedColumnName = "description_id")
    private ProblemDescription problemDescription;
}
