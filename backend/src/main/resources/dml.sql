--INSERT INTO problem (title, complexity, tags) VALUES ('Two-sum', 'Easy', '{"Array", "Hashmap"}');
-- INSERT INTO PROBLEM AND PROBLEM_TAGS TABLES
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


INSERT INTO problem (title, complexity) VALUES ('FizzBuzz', 'Easy');
INSERT INTO problem_tags (problem_id, tag) VALUES (2, 'Array');

INSERT INTO problem (title, complexity) VALUES ('Binary-search', 'Easy');
INSERT INTO problem_tags (problem_id, tag) VALUES (3, 'Array');
INSERT INTO problem_tags (problem_id, tag) VALUES (3, 'Binary Search');

INSERT INTO problem (title, complexity) VALUES ('Contains-duplicate', 'Easy');
INSERT INTO problem_tags (problem_id, tag) VALUES (4, 'Array');
INSERT INTO problem_tags (problem_id, tag) VALUES (4, 'Hashmap');

