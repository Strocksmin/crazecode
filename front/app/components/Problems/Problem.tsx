import Link from 'next/link';
import React from 'react';

type ProblemProps = {
    problem: {problem_id: number, title: string, complexity: string, tags: string[] }
};

const Problem: React.FC<ProblemProps> = (props) => {
    const {
        problem
    } = props;

    console.log(problem.problem_id)

    return (
        <div className='problem'>
            <div className='start-two'>
                <div>{problem.problem_id} </div>
                <div className='problem-start-table-title'>
                    <Link href={`/problems/${problem.problem_id}`} className='hover:text-blue-600 cursor-pointer' target='_blank'>
                        {problem.title}
                    </Link>
                </div>
            </div>
            <div className='start-last2'>
                <div>{problem.complexity}</div>
                <div>{problem.complexity}</div>
            </div>
        </div>
    )
}
export default Problem;