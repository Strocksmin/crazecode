"use client"
import React, { useState } from 'react';
import Problem from './Problem';
import Pagination from '../Pagination/Pagination';
import FilterMenu from '../Filter/FilterMenu';
import { Icon, Label } from 'semantic-ui-react'
import "semantic-ui-css/components/label.min.css"
import "semantic-ui-css/components/icon.min.css"

type ProblemsTableProps = {

};

let list: string[] = [];

const pageSize = 5;

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const [problems, setProblems] = useState([
        {
            status: 'Решено', title: 'Two sum',
            solve: 'Решение', complexity: 1, tags: [
                'Array',
                'Hashmap',],
        },
        {
            status: 'Решено', title: 'Unique Number of Occurrences',
            solve: 'Решение', complexity: 1, tags: [
                'Array',
                'Set',],
        },
        {
            status: 'Решено', title: 'FizzBuzz',
            solve: 'Решение', complexity: 1, tags: [
                'Array',],
        },
        {
            status: 'Решено', title: 'Find Beautiful Indices in the Given Array II',
            solve: 'Решение', complexity: 3, tags: [
                'Array',
                'Hashmap',],
        },
        {
            status: 'Решено', title: 'Two sum',
            solve: 'Решение', complexity: 1, tags: [
                'Array',
                'Hashmap',],
        },
        {
            status: 'Решено', title: 'Unique Number of Occurrences',
            solve: 'Решение', complexity: 1, tags: [
                'Array',
                'Set',],
        },
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
                "Set", "Array", "Hashmap"
            ],
            state: [

            ]
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const [filterArray, setFilterArray] = useState(list);

    const handleClick = (tag: string) => {
        setFilterArray(filterArray.filter((obj) => obj !== tag));
    };

    const searchResults = !searchTerm ? problems : problems.filter(
        (problem) => problem.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredData = searchResults.filter((problem) => {
        return filterArray.every((tag) => problem.tags.includes(tag))
    });

    const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return filteredData.slice(firstPageIndex, lastPageIndex);
    };

    return (
        <>
            <FilterMenu
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
                            <Label as='a'
                                key={`close-button-${id}`}
                            //onClick={setFilterArray(filterArray.filter((obj) => obj !== tag))}
                            >
                                {tag} &nbsp;
                               <Icon name='delete' onClick={() => handleClick(tag)}/> 
                            </Label>
                        );
                    })
                    : ''}
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