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

