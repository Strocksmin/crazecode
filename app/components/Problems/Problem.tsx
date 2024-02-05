import React from 'react';

type ProblemProps = {
    status:string,
    title:string,
    solve:string,
    complexity:number,
};

const Problem:React.FC<ProblemProps> = ({status, title, solve, complexity}, filtered) => {
    
    return (
        <div className='problem'>
            <div className='start-two'>
                <div>{status}</div>
                <div className='problem-start-table-title'>{title}</div>
            </div>
            <div className='start-last2'>
                <div>{solve}</div>
                <div>{complexity}</div>
            </div>
        </div>
    )
}
export default Problem;