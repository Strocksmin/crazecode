DROP TABLE problem_tags;
DROP TABLE problem;

CREATE TABLE problem (
    problem_id SERIAL PRIMARY KEY,
    title varchar(20),
    complexity varchar(10)
);

CREATE TABLE problem_tags (
    problem_id int REFERENCES problem(problem_id) not null,
    tag varchar(10)
);

CREATE TABLE problemDescription (
    problem_id SERIAL PRIMARY KEY,
    order int,
    title varchar(20),
	problemStatement varchar(20),
	example_id BIGINT,
	conditions text,
	starterCode text,
	starterFunctionName varchar
);

