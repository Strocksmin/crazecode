CREATE TABLE Problem (
    problem_id SERIAL PRIMARY KEY,
    title varchar(20),
    complexity varchar(10),
    tags varchar[]
);

INSERT INTO Problem (title, complexity, tags) VALUES ('Two-sum', 'Easy', '{"Array", "Hashmap"}');

CREATE TABLE ProblemDescription (
    problem_id SERIAL PRIMARY KEY,
    order int,
    title varchar(20),
	problemStatement varchar(20),
	example_id BIGINT,
	conditions text,
	starterCode text,
	starterFunctionName varchar
);

