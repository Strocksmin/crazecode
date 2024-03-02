package com.example.crazecode.controller.mapper;

import com.example.crazecode.domain.dto.ProblemDto;
import com.example.crazecode.domain.model.entity.Problem;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@Component
public class ProblemMapper {
    private final ModelMapper modelMapper;

    public ProblemMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;


        modelMapper.createTypeMap(Problem.class, ProblemDto.class)
                .addMapping(problem -> problem.getProblem_id(), ProblemDto::setProblem_id)
                .addMapping(problem -> problem.getComplexity(), ProblemDto::setComplexity)
                .addMapping(problem -> problem.getTitle(), ProblemDto::setTitle)
                .addMapping(problem -> problem.getTags(), ProblemDto::setTags);


                //.addMappings(mapper -> mapper.skip(ProblemDto::setProblemDescription));
    }

    public ProblemDto convertToDto(Problem problem) {
        return modelMapper.map(problem, ProblemDto.class);
    }

    public Problem convertToProblem(ProblemDto problemDto) {
        return modelMapper.map(problemDto, Problem.class);
    }
}
