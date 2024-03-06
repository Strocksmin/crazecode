export type Example = {
	id: number;
	input_text: string;
	output_text: string;
	explanation: string
};

// local problem data
export type Problem = {
	id: number;
	number: number;
	title: string;
	statement: string;
	conditions: string;
	starterCode: string;
	starterFunctionName: string;
	examples: Example[]
};

export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};