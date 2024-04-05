package com.example.crazecode.config;

import lombok.extern.slf4j.Slf4j;
import org.reactivestreams.Publisher;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.client.reactive.ClientHttpRequestDecorator;
import org.springframework.web.reactive.function.client.ClientRequest;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;

@Slf4j
@Configuration
@EnableWebMvc
public class WebConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }

    @Bean
    public WebClient apiClient() {
        return WebClient.builder()/*.filter((request, next) -> {
            log.error("DOWNSTREAM REQUEST: METHOD {}, URI: {}, HEADERS: {}",
                    request.method(), request.url(), request.headers());
            return next
                    .exchange(interceptBody(request))
                    .doOnNext(this::logResponse)
                    .map(this::interceptBody);
        })*/.baseUrl("http://localhost:2358").build();
        /*return WebClient.create("http://localhost:2358");*/
    }
    private ClientRequest interceptBody(ClientRequest request) {
        return ClientRequest.from(request)
                .body((outputMessage, context) -> request.body().insert(new ClientHttpRequestDecorator(outputMessage) {
                    @Override
                    public Mono<Void> writeWith(Publisher<? extends DataBuffer> body) {
                        return super.writeWith(Mono.from(body)
                                .doOnNext(dataBuffer -> logRequestBody(dataBuffer)));
                    }
                }, context))
                .build();
    }

    private ClientResponse interceptBody(ClientResponse response) {
        return response.mutate()
                .body(data -> data.doOnNext(this::logResponseBody))
                .build();
    }

    private void logRequestBody(DataBuffer dataBuffer) {
        log.error("DOWNSTREAM REQUEST: BODY: {}", dataBuffer.toString(StandardCharsets.UTF_8));
    }

    private void logResponse(ClientResponse response) {
        log.error("DOWNSTREAM RESPONSE: STATUS: {}, HEADERS: {}", response.statusCode(), response.headers().asHttpHeaders());
    }

    private void logResponseBody(DataBuffer dataBuffer) {
        log.error("DOWNSTREAM RESPONSE: BODY: {}", dataBuffer.toString(StandardCharsets.UTF_8));
    }
}
