TRUNCATE TABLE problem RESTART IDENTITY CASCADE;
TRUNCATE TABLE examples RESTART IDENTITY CASCADE;
TRUNCATE TABLE problemDescription RESTART IDENTITY CASCADE;
TRUNCATE TABLE problem_tags RESTART IDENTITY CASCADE;
TRUNCATE TABLE problem_tests RESTART IDENTITY CASCADE;
TRUNCATE TABLE submissions RESTART IDENTITY CASCADE;
TRUNCATE TABLE user_submissions RESTART IDENTITY CASCADE;
TRUNCATE TABLE languages RESTART IDENTITY CASCADE;
DROP TABLE problem;
DROP TABLE problemdescription;
DROP TABLE examples;
DROP TABLE problem_tags;
DROP TABLE problem_tests;
DROP TABLE submissions;
DROP TABLE user_submissions cascade;
DROP TABLE languages cascade;

CREATE TABLE problemDescription
(
    description_id      SERIAL PRIMARY KEY,
    number              int,
    title               varchar(40),
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
    title varchar(40),
    complexity varchar(20),
    description int REFERENCES problemdescription(description_id) not null
);

CREATE TABLE problem_tags (
    problem_id int REFERENCES problem(problem_id) not null,
    tag varchar(20)
);

CREATE TABLE problem_tests (
    test_id SERIAL PRIMARY KEY,
    problem_id int REFERENCES problem(problem_id) not null,
    expected_input text,
    expected_output text
);

DROP TABLE users CASCADE;

CREATE TABLE users
(
    user_id     SERIAL PRIMARY KEY,
    login       varchar(100) UNIQUE NOT NULL,
    password    varchar,
    role        varchar(64),
    email       varchar UNIQUE
);

CREATE TABLE languages
(
    language_id SERIAL PRIMARY KEY,
    name varchar(60),
    compile_cmd text,
    run_cmd text,
    source_file text
);

CREATE TABLE submissions
(
    submission_id SERIAL PRIMARY KEY,
    source_code text,
    language_id int REFERENCES languages(language_id),
    user_id int REFERENCES users(user_id),
    stdin text,
    expected_output text,
    stdout text,
    status_id int,
    created_at timestamp,
    finished_at timestamp,
    time decimal,
    memory int,
    stderr text,
    token text,
    number_of_runs int, 
    cpu_time_limit decimal,
    cpu_extra_time decimal,
    wall_time_limit decimal,
    memory_limit decimal,
    stack_limit decimal,
    compile_output text,
    exit_code int,
    exit_signal int,
    compiler_options text,
    command_line_arguments text,
    additional_files bytea
);

CREATE TABLE user_submissions
(
    submission_id SERIAL PRIMARY KEY,
    user_id int REFERENCES users(user_id) not null,
    problem_id int,
    date timestamp,
    language varchar(60),
    status varchar(60),
    time varchar(30),
    memory varchar(30)
);