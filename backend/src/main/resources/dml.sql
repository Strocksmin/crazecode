----- #1
INSERT INTO examples (example_id, problem_id, input_text, output_text, explanation) VALUES
    (1, 1, 'nums = [2, 7, 11, 15], target = 9', '[0, 1]', 'Because nums[0] + nums[1] == 9, we return [0, 1].');
INSERT INTO examples (example_id, problem_id, input_text, output_text, explanation) VALUES
    (2, 1, 'nums = [3, 2, 4], target = 6', '[1, 2]', 'Because nums[1] + nums[2] == 6, we return [1, 2].');
INSERT INTO problemdescription (description_id, number, title, problemstatement,
                                conditions, startercode, starterfunctionname) VALUES (1, 1, 'Two sum', '<p class=''mt-3''>
  Given an array of integers <code>nums</code> and an integer <code>target</code>, return
  <em>indices of the two numbers such that they add up to</em> <code>target</code>.
</p>
<p class=''mt-3''>
  You may assume that each input would have <strong>exactly one solution</strong>, and you
  may not use thesame element twice.
</p>
<p class=''mt-3''>You can return the answer in any order.</p>', '<li class=''mt-2''>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class=''mt-2''>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class=''mt-2''>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class=''mt-2 text-sm''>
<strong>Only one valid answer exists.</strong>
</li>', 'function twoSum(nums,target){
  // Write your code here
};', 'function twoSum(');
INSERT INTO problem (title, complexity, description) VALUES ('Two-sum', 'Easy', 1);
INSERT INTO problem_tags (problem_id, tag) VALUES (1, 'Array');
INSERT INTO problem_tags (problem_id, tag) VALUES (1, 'Hashmap');
INSERT INTO problem_tests (problem_id, expected_input, expected_output) VALUES (1, 'console.log(twoSum([2,7,11,15], 9))', '[ 0, 1 ]');
INSERT INTO problem_tests (problem_id, expected_input, expected_output) VALUES (1, 'console.log(twoSum([2,7,11,15], 13))', '[ 0, 2 ]');
INSERT INTO problem_tests (problem_id, expected_input, expected_output) VALUES (1, 'console.log(twoSum([4,6,1,2], 3))', '[ 2, 3 ]');



----- #2
INSERT INTO examples (problem_id, input_text, output_text, explanation) VALUES
    (2, 'nums = [2,3,1,1,4]', 'true', 'Jump 1 step from index 0 to 1, then 3 steps to the last index.');
INSERT INTO examples (problem_id, input_text, output_text, explanation) VALUES
    (2, 'nums = [3,2,1,0,4]', 'false', 'You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.');
INSERT INTO problemdescription (description_id, number, title, problemstatement,
                                conditions, startercode, starterfunctionname) VALUES (2, 2, 'Jump game', '<p class=''mt-3''>
    You are given an integer array <code>nums</code>. You are initially positioned at the <strong>first index</strong>
    and each element in the array represents your maximum jump length at that position.
  </p>
    <p class=''mt-3''>
    Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.
    </p>', '<li class=''mt-2''><code>1 <= nums.length <= 10^4</code></li>
    <li class=''mt-2''><code>0 <= nums[i] <= 10^5</code></li>', 'function canJump(nums) {
  // Write your code here
};', 'function canJump(');
INSERT INTO problem (title, complexity, description) VALUES ('Jump-game', 'Medium', 2);
INSERT INTO problem_tags (problem_id, tag) VALUES (2, 'Array');
INSERT INTO problem_tags (problem_id, tag) VALUES (2, 'DP');
INSERT INTO problem_tags (problem_id, tag) VALUES (2, 'Greedy');



----------------------------------------------------------------------------------------

INSERT INTO problem (title, complexity) VALUES ('FizzBuzz', 'Easy');
INSERT INTO problem_tags (problem_id, tag) VALUES (2, 'Array');

INSERT INTO problem (title, complexity) VALUES ('Binary-search', 'Easy');
INSERT INTO problem_tags (problem_id, tag) VALUES (3, 'Array');
INSERT INTO problem_tags (problem_id, tag) VALUES (3, 'Binary Search');

INSERT INTO problem (title, complexity) VALUES ('Contains-duplicate', 'Easy');
INSERT INTO problem_tags (problem_id, tag) VALUES (4, 'Array');
INSERT INTO problem_tags (problem_id, tag) VALUES (4, 'Hashmap');




INSERT INTO languages(language_id, name, compile_cmd, run_cmd, source_file) VALUES
(43, 'Plain Text', null,  '/bin/cat text.txt', 'text.txt'),
(44, 'Executable', null, '/bin/chmod +x a.out && ./a.out', 'a.out'),
(45, 'Assembly (NASM 2.14.02)', '/usr/local/nasm-2.14.02/bin/nasmld -f elf64 %s main.asm', './a.out', 'main.asm'),
(46, 'Bash (5.0.0)', null, '/usr/local/bash-5.0/bin/bash script.sh', 'script.sh'),
(47, 'Basic (FBC 1.07.1)', '/usr/local/fbc-1.07.1/bin/fbc %s main.bas', './main', 'main.bas'),
(48, 'C (GCC 7.4.0)', '/usr/local/gcc-7.4.0/bin/gcc %s main.c', './a.out', 'main.c'),
(49, 'C (GCC 8.3.0)', '/usr/local/gcc-8.3.0/bin/gcc %s main.c', './a.out', 'main.c'),
(50, 'C (GCC 9.2.0)', '/usr/local/gcc-9.2.0/bin/gcc %s main.c', './a.out', 'main.c'),
(51, 'C# (Mono 6.6.0.161)', '/usr/local/mono-6.6.0.161/bin/mcs %s Main.cs', '/usr/local/mono-6.6.0.161/bin/mono Main.exe', 'Main.cs'),
(52, 'C++ (GCC 7.4.0)', '/usr/local/gcc-7.4.0/bin/g++ %s main.cpp', 'LD_LIBRARY_PATH=/usr/local/gcc-7.4.0/lib64 ./a.out', 'main.cpp'),
(53, 'C++ (GCC 8.3.0)', '/usr/local/gcc-8.3.0/bin/g++ %s main.cpp', 'LD_LIBRARY_PATH=/usr/local/gcc-8.3.0/lib64 ./a.out', 'main.cpp'),
(54, 'C++ (GCC 9.2.0)', '/usr/local/gcc-9.2.0/bin/g++ %s main.cpp', 'LD_LIBRARY_PATH=/usr/local/gcc-9.2.0/lib64 ./a.out', 'main.cpp'),
(55, 'Common Lisp (SBCL 2.0.0)', null, 'SBCL_HOME=/usr/local/sbcl-2.0.0/lib/sbcl /usr/local/sbcl-2.0.0/bin/sbcl --script script.lisp', 'script.lisp'),
(56, 'D (DMD 2.089.1)', '/usr/local/d-2.089.1/linux/bin64/dmd %s main.d', './main', 'main.d'),
(57, 'Elixir (1.9.4)', null, '/usr/local/elixir-1.9.4/bin/elixir script.exs', 'script.exs'),
(58, 'Erlang (OTP 22.2)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(59, 'Fortran (GFortran 9.2.0)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(60, 'Go (1.13.5)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(61, 'Haskell (GHC 8.8.1)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(62, 'Java (OpenJDK 13.0.1)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(63, 'JavaScript (Node.js 12.14.0)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(64, 'Lua (5.3.5)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(65, 'OCaml (4.09.0)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(66, 'Octave (5.1.0)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(67, 'Pascal (FPC 3.0.4)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(68, 'PHP (7.4.1)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(69, 'Prolog (GNU Prolog 1.4.5)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(70, 'Python (2.7.17)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(71, 'Python (3.8.1)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(72, 'Ruby (2.7.0)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(73, 'Rust (1.40.0)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(74, 'TypeScript (3.7.4)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(75, 'C (Clang 7.0.1)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(76, 'C++ (Clang 7.0.1)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(77, 'COBOL (GnuCOBOL 2.2)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(78, 'Kotlin (1.3.70)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(79, 'Objective-C (Clang 7.0.1)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(80, 'R (4.0.0)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(81, 'Scala (2.13.2)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(82, 'SQL (SQLite 3.27.2)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(83, 'Swift (5.2.3)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(84, 'Visual Basic.Net (vbnc 0.0.0.5943)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(85, 'Perl (5.28.1)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(86, 'Clojure (1.10.1)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(87, 'F# (.NET Core SDK 3.1.202)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(88, 'Groovy (3.0.3)', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl'),
(89, 'Multi-file program', null, '/bin/sed -i ''1s/^/\\n/'' main.erl && /usr/local/erlang-22.2/bin/escript main.erl', 'main.erl')