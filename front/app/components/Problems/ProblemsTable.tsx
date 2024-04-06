"use client"
import React, { useEffect, useState } from 'react';
import Problem from './Problem';
import Pagination from '../Pagination/Pagination';
import FilterMenu from '../Filter/FilterMenu';
import { Icon, Label } from 'semantic-ui-react'
import "semantic-ui-css/components/label.min.css"
import "semantic-ui-css/components/icon.min.css"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

type ProblemsTableProps = {

};

let list: string[] = [];

const pageSize = 5;

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
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
          setProblems(data); }
          catch (error) {console.log(error)}
        }
        fetchData();
      }, []);

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
                    ? filterArray.map((tag, problem_id) => {
                        return (
                            <Label as='a'
                                key={`close-button-${problem_id}`}
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
                

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

                <div className='content-table'>
                    {currentTableData().map((problem, index) => (
                        <Problem problem={problem} key={index} />
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