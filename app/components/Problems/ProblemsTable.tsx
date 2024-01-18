"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Problem from './Problem';

type ProblemsTableProps = {
    
};

const ProblemsTable:React.FC<ProblemsTableProps> = () => {
    const [problems, setProblems] = useState([
        {status: 'Решено', title: 'Two sum', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'Unique Number of Occurrences', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'FizzBuzz', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'Find Beautiful Indices in the Given Array II', 
        solve: 'Решение', complexity:  3}
    ]);

    return (
        <div className='problems-table'>
            <div className='start-table'>
                <div className='start-two'>
                    <div>Статус</div>
                    <div className='start-table-title'>Название</div>
                </div>
                <div className='start-last'>
                    <div>Решение</div>
                    <div>Сложность</div>
                </div>
            </div>
            <div className='content-table'>
                {problems.map((problem) => (
                    <Problem {...problem} />
                ))}
            </div>
        </div>
    )
}
export default ProblemsTable;