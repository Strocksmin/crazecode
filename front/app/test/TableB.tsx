"use client"
import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination/Pagination';
import Prob from './prob';
import Dropdown from './dropdown';
import Search from './search';
import FilterMenu from '../components/Filter/FilterMenu';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
type TableBProps = {

};
const pageSize = 5;
let list: string[] = [];
const TableB: React.FC<TableBProps> = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const [problems, setProblems] = useState([
        {
            problem_id: 1, title: 'Two-sum',
            complexity: "Easy", tags: [
                'Array',
                'Hashmap',]
        },
        {
            problem_id: 2, title: 'Unique-Number-of-Occurrences',
            complexity: "Easy", tags: [
                'Array',
                'Set',]
        },
        {
            problem_id: 3, title: 'FizzBuzz',
            complexity: "Easy", tags: [
                'Array',]
        },
        {
            problem_id: 4, title: 'Find-Beautiful-Indices-in-the-Given-Array-II',
            complexity: "Medium", tags: [
                'Array',
                'Hashmap',]
        },
        {
            problem_id: 5, title: 'Two-sum',
            complexity: "Easy", tags: [
                'Array',
                'Hashmap',]
        },
        {
            problem_id: 6, title: 'Unique-Number-of-Occurrences',
            complexity: "Easy", tags: [
                'Array',
                'Set',]
        },
        /*{problem_id: 1, title: 'FizzBuzz', 
        complexity:  1},
        {problem_id: 1, title: 'Find Beautiful Indices in the Given Array II', 
        complexity:  3},
        {problem_id: 1, title: 'Two sum', 
        complexity:  1},
        {problem_id: 1, title: 'Unique Number of Occurrences', 
        complexity:  1},
        {problem_id: 1, title: 'FizzBuzz', 
        complexity:  1},
        {problem_id: 1, title: 'Find Beautiful Indices in the Given Array II', 
        complexity:  3}*/
    ]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8080/problems');
                const data = await response.json();
                setProblems(data);
            }
            catch (error) { console.log(error) }
        }
        fetchData();
    }, []);

    const filterStructure = [
        {
            title: "Category",
            content: [
                "All", "Hashmap", "Array", "Bit", "DP"
            ],
            state: [

            ]
        },
        {
            title: "Difficulty",
            content: [
                "All", "Easy", "Medium", "Hard"
            ],
            state: [

            ]
        },
        {
            title: "Status",
            content: [
                "All", "Solved", "Not solved"
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
        return filterArray.every((tag) => problem.tags.includes(tag) || problem.complexity == tag)
    });

    const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return filteredData.slice(firstPageIndex, lastPageIndex);
    };
    console.log(filterArray)
    return (
        <>
            <div className='w-[100%]'>
                <div className='mt-[5em] mb-[1em] mx-[5em]'>
                    <div className='text-center mt-[7em] mb-[2em]'>
                        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">We invest in the world’s potential</h1>
                        <p className="mb-6 text-base font-normal text-gray-900 lg:text-lg sm:px-16 xl:px-48 mt-[1em]">Here at Сrazecode we offers a wide range of programming problems, each with varying levels of difficulty, covering topics such as algorithms, data structures, and problem-solving techniques.</p>
                    </div>
                    <div className='mb-[1em] flex'>
                        {filterStructure.map((structure, index) => (
                            <div>
                                <Dropdown
                                    filtersArray={filterArray}
                                    onSetFilterArray={filterArray => setFilterArray(filterArray)}
                                    text={structure.title}
                                    categories={structure.content} />
                            </div>
                        ))}
                        <div className='mr-[.45em] lfex'>
                            <button
                                onClick={() => setFilterArray([])}
                                type="submit"
                                className="px-[0.5em] py-[0.43em] text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                <FilterAltOffIcon />
                            </button>
                        </div>
                        <div className='w-full block'>
                            <Search
                                searchTerm={searchTerm}
                                onSetSearchTerm={searchTerm => setSearchTerm(searchTerm)}
                            />
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-black">
                            <thead className="text-xs text-black uppercase bg-white font-medium">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Difficulty
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Order
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTableData().map((problem, index) => (
                                    <Prob problem={problem} key={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
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
export default TableB;