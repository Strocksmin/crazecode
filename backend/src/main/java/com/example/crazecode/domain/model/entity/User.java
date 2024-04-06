package com.example.crazecode.domain.model.entity;

import com.example.crazecode.domain.model.enumEntity.Role;
import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column(name = "login")
    private String login;
    @Column(name = "password")
    private String password;
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;
    @Column(name = "email")
    private String email;

    public User(String login, String password, Role role, String email) {
        this.login = login;
        this.password = password;
        this.role = role;
        this.email = email;
    }
}
