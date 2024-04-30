package com.example.crazecode.domain.model.entity;

import com.example.crazecode.domain.model.enumEntity.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_submissions")
public class UserSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "submission_id")
    private Long id;

    @Column(name = "date")
    private LocalDateTime dateTime;
    @Column(name = "language")
    private String language;
    @Column(name = "status")
    private String status;
    @Column(name = "time")
    private String time;
    @Column(name = "memory")
    private String memory;
    @Column(name = "problem_id")
    private Long problem_id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    public UserSubmission(Long problem_id, User user, LocalDateTime dateTime, String language, String status, String time, String memory) {
        this.problem_id = problem_id;
        this.user = user;
        this.dateTime = dateTime;
        this.language = language;
        this.status = status;
        this.time = time;
        this.memory = memory;
    }
}