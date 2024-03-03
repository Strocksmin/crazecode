TRUNCATE TABLE problem RESTART IDENTITY CASCADE;
DROP TABLE problem;
DROP TABLE problemdescription;
DROP TABLE examples;
DROP TABLE problem_tags;

CREATE TABLE problemDescription
(
    description_id      SERIAL PRIMARY KEY,
    number              int,
    title               varchar(20),
    problemStatement    text,
    conditions          text,
    starterCode         text,
    starterFunctionName varchar
);

CREATE TABLE examples
(
    example_id SERIAL PRIMARY KEY,
    problem_id int REFERENCES problemdescription(description_id) not null,
    input_text text,
    output_text text,
    explanation text
);

CREATE TABLE problem (
    problem_id SERIAL PRIMARY KEY,
    title varchar(20),
    complexity varchar(10),
    description int REFERENCES problemdescription(description_id) not null
);

CREATE TABLE problem_tags (
    problem_id int REFERENCES problem(problem_id) not null,
    tag varchar(10)
);