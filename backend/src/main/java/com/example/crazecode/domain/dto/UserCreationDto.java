package com.example.crazecode.domain.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserCreationDto {
    private String login;
    private String password;
    private String email;
}
