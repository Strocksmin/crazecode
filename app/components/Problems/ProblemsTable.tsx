"use client"
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import Problem from './Problem';
import Pagination from '../Pagination/Pagination';
import FilterMenu from '../Filter/FilterMenu';

type ProblemsTableProps = {
};

const pageSize = 10;

const ProblemsTable:React.FC<ProblemsTableProps> = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const [currentFilter, setCurrentFilter] = useState("");

    const [problems, setProblems] = useState([
        {status: 'Решено', title: 'Two sum', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'Unique Number of Occurrences', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'FizzBuzz', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'Find Beautiful Indices in the Given Array II', 
        solve: 'Решение', complexity:  3},
        {status: 'Решено', title: 'Two sum', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'Unique Number of Occurrences', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'FizzBuzz', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'Find Beautiful Indices in the Given Array II', 
        solve: 'Решение', complexity:  3},
        {status: 'Решено', title: 'Two sum', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'Unique Number of Occurrences', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'FizzBuzz', 
        solve: 'Решение', complexity:  1},
        {status: 'Решено', title: 'Find Beautiful Indices in the Given Array II', 
        solve: 'Решение', complexity:  3}
    ]);

    const filteredData = currentFilter != "" ? problems.filter((problem) => {
            return problem.title === currentFilter;
        }
    ) : problems; 

    const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return problems.slice(firstPageIndex, lastPageIndex);}, [currentPage]);

    console.log(problems.filter((problem) => problem.title === currentFilter));

    return (
        <>
            <FilterMenu onFilterChange={currentFilter => setCurrentFilter(currentFilter)} />
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
                    {currentTableData.map((problem, index) => (
                        <Problem {...problem} key={index}/>
                    ))}
                </div>
                <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={problems.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)} />
            </div>
        </>
    )
}
export default ProblemsTable;