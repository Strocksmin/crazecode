package com.example.crazecode.controller.restcontroller;

import com.example.crazecode.dao.impl.ProblemDescriptionDaoImpl;
import com.example.crazecode.domain.dto.JwtResponse;
import com.example.crazecode.domain.dto.JwtTokenDto;
import com.example.crazecode.domain.dto.LoginDto;
import com.example.crazecode.domain.dto.UserCreationDto;
import com.example.crazecode.domain.model.entity.User;
import com.example.crazecode.domain.model.enumEntity.Role;
import com.example.crazecode.security.UserDetailsImpl;
import com.example.crazecode.security.jwt.JwtUtil;
import com.example.crazecode.service.impl.ProblemDescriptionServiceImpl;
import com.example.crazecode.service.impl.ProblemServiceImpl;
import com.example.crazecode.service.impl.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
public class AuthController {
    @Value("${root.login}")
    private String rootLogin;
    @Value("${root.password}")
    private String rootPassword;
    private final UserServiceImpl userService;
    private final JwtUtil jwtTokenSupplier;
    private AuthenticationManager authenticationManager;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AuthController(UserServiceImpl userService,
                          JwtUtil jwtTokenSupplier,
                          AuthenticationManager authenticationManager,
                          PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.jwtTokenSupplier = jwtTokenSupplier;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }
    @PostMapping(value = "/signup")
    public void createUser(@RequestBody UserCreationDto userCreationDto) {
        String login = userCreationDto.getLogin();
        String password = passwordEncoder.encode(userCreationDto.getPassword());
        String email = userCreationDto.getEmail();
        User user = new User(login, password, Role.USER, email);

        try {
            userService.create(user);
        } catch (Exception e) {
            throw new RuntimeException("Неудачная попытка создания пользователя", e);
        }
    }
    @PostMapping(value = "/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getLogin(), loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtTokenSupplier.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());
        JwtResponse res = new JwtResponse();
        res.setToken(jwt);
        res.setId(userDetails.getUser().getId());
        res.setUsername(userDetails.getUsername());
        res.setRoles(roles);

        return ResponseEntity.ok(res);
    }
}
