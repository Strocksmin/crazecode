"use client"
import React, { useEffect, useMemo, useState } from 'react';
import Problem from './Problem';
import Pagination from '../Pagination/Pagination';
import FilterMenu from '../Filter/FilterMenu';

type ProblemsTableProps = {
    
};
let list: string[] = [];
const pageSize = 5;

const ProblemsTable:React.FC<ProblemsTableProps> = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const [isTaged, setTaged] = useState(false);

    const [currentFilter, setCurrentFilter] = useState("");
    
    const [problems, setProblems] = useState([
        {status: 'Решено', title: 'Two sum', 
        solve: 'Решение', complexity:  1, tags: [
            'array',
            'hashmap',],
        },
        {status: 'Решено', title: 'Unique Number of Occurrences', 
        solve: 'Решение', complexity:  1, tags: [
            'array',
            'set',],},
        {status: 'Решено', title: 'FizzBuzz', 
        solve: 'Решение', complexity:  1,tags: [
            'array',],},
        {status: 'Решено', title: 'Find Beautiful Indices in the Given Array II', 
        solve: 'Решение', complexity:  3,tags: [
            'array',
            'hashmap',],},
        {status: 'Решено', title: 'Two sum', 
        solve: 'Решение', complexity:  1, tags: [
            'array',
            'hashmap',],},
        {status: 'Решено', title: 'Unique Number of Occurrences', 
        solve: 'Решение', complexity:  1, tags: [
            'array',
            'set',],},
        /*{status: 'Решено', title: 'FizzBuzz', 
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
        solve: 'Решение', complexity:  3}*/
    ]);

    const filterStructure = [
        {
            title: "Сложность",
            content: [
                "Легко", "Нормально", "Сложно"
            ],
            state: [

            ]
        },
        {
            title: "Статус",
            content: [
                "Выполнено", "Не выполнено"
            ],
            state: [

            ]
        },
        {
            title: "Тема",
            content: [
                "set", "array", "hashmap"
            ],
            state: [

            ]
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const [filterArray, setFilterArray] = useState(list);

    const searchResults = !searchTerm ? problems : problems.filter(
        (problem) => problem.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredData = searchResults.filter((problem) => {
        return filterArray.every((tag) => problem.tags.includes(tag))
    });

    const currentTableData = () => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);};

    return (
        <>
            <FilterMenu 
                onFilterChange={currentFilter => setCurrentFilter(currentFilter)} 
                filtersArray={filterArray}
                onSetFilterArray={filterArray => setFilterArray(filterArray)}
                filterStructure={filterStructure}
                searchTerm={searchTerm}
                onSetSearchTerm={searchTerm => setSearchTerm(searchTerm)}
            />
             <div className='tags'>
        {filterArray.length > 0
          ? filterArray.map((tag, id) => {
              return (
                <button
                  key={`close-button-${id}`}
                  className='close'
                  //onClick={setFilterArray(filterArray.filter((obj) => obj !== tag))}
                >
                  {tag} &nbsp; x
                </button>
              );
            })
          : 'No tags selected'}
      </div>
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
                    {currentTableData().map((problem, index) => (
                        <Problem {...problem} key={index} />
                    ))}
                </div>
                <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredData.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)}
            />
            </div>
        </>
    )
}
export default ProblemsTable;