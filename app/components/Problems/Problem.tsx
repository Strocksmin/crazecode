import Link from 'next/link';
import React from 'react';

type ProblemProps = {
    status: string,
    title: string,
    solve: string,
    complexity: number,
};

const Problem: React.FC<ProblemProps> = ({ status, title, solve, complexity }, filtered) => {

    return (
        <div className='problem'>
            <div className='start-two'>
                <div>{status}</div>
                <div className='problem-start-table-title'>
                    <Link href="" className='hover:text-blue-600 cursor-pointer' target='_blank'>
                        {title}
                    </Link>
                </div>
            </div>
            <div className='start-last2'>
                <div>{solve}</div>
                <div>{complexity}</div>
            </div>
        </div>
    )
}
export default Problem;