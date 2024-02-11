import Link from 'next/link';
import React from 'react';

type ProblemProps = {
    /*status: string,
    title: string,
    solve: string,
    complexity: number, */
    problem: {status: string, title: string, solve: string, complexity: number, tags: string[] }
};

const Problem: React.FC<ProblemProps> = (props) => {
    const {
        problem
    } = props;

    return (
        <div className='problem'>
            <div className='start-two'>
                <div>{problem.status}</div>
                <div className='problem-start-table-title'>
                    <Link href={`/problems/${problem.title}`} className='hover:text-blue-600 cursor-pointer' target='_blank'>
                        {problem.title}
                    </Link>
                </div>
            </div>
            <div className='start-last2'>
                <div>{problem.solve}</div>
                <div>{problem.complexity}</div>
            </div>
        </div>
    )
}
export default Problem;