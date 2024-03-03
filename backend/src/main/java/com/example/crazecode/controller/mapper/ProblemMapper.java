package com.example.crazecode.controller.mapper;

import com.example.crazecode.domain.dto.ProblemDto;
import com.example.crazecode.domain.model.entity.Problem;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@Component
public class ProblemMapper {
    private final ModelMapper modelMapper;

    public ProblemMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;

        //Converter<String, String> converterOfTitle = (src) -> src.getSource().replace("-", " ");

        modelMapper.createTypeMap(Problem.class, ProblemDto.class)
                .addMapping(problem -> problem.getProblem_id(), ProblemDto::setProblem_id)
                .addMapping(problem -> problem.getComplexity(), ProblemDto::setComplexity)
                .addMapping(problem -> problem.getTitle(), ProblemDto::setTitle)
                /*.addMappings(new PropertyMap<Problem, ProblemDto>() {
                    @Override
                    protected void configure() {
                        using(converterOfTitle).map(source.getTitle(), destination.getTitle());
                    }
                });*/
                .addMapping(problem -> problem.getTags(), ProblemDto::setTags);
    }

    public ProblemDto convertToDto(Problem problem) {
        return modelMapper.map(problem, ProblemDto.class);
    }

    public Problem convertToProblem(ProblemDto problemDto) {
        return modelMapper.map(problemDto, Problem.class);
    }
}
