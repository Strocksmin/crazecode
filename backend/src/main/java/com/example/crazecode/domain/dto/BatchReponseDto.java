package com.example.crazecode.domain.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.util.MultiValueMap;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

@Getter
@Setter
public class BatchReponseDto implements Serializable {
    private List<JudgeResponseDto> submissions;

    @Override
    public String toString() {
        return "BatchReponseDto{" +
                "submissions=" + submissions +
                '}';
    }
}
