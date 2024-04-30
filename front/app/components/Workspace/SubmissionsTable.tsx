'use client'
import axios from 'axios';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import Submission from './Submission';

type SubmissionsTableProps = {
    problem_id: number,
};

const SubmissionsTable: React.FC<SubmissionsTableProps> = (props) => {
    const {
        problem_id
    } = props;

    const [submissions, setSubmissions] = useState([
        {
            id: 1,
            dateTime: [2024, 4, 30, 14, 25, 37, 678312000],
            language: "",
            status: "Not exists submissions yet",
            time: "",
            memory: "",
            problem_id: 1
        }
    ]);

    type SignInResponse = {
        id: number;
        datetime: number[];
        language: string;
        status: string;
        time: string;
        memory: string;
        problem_id: number
    };

    useEffect(() => {
        async function fetchData() {
            try {
                if (localStorage.getItem("user_id") == null) {
                    console.log("Пользователь не авторизован");
                    router.push("/auth");
                }
                const { data, status } = await axios.get(
                    'http://localhost:8080/submissions/user/' +
                    localStorage.getItem("user_id") +
                    '/problem/' + props.problem_id,
                    {
                        headers: {
                            Accept: 'application/json'
                        },
                    },
                );
                console.log(data);
                setSubmissions(data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error message: ', error.message);
                    return error.message;
                } else {
                    console.log('unexpected error: ', error);
                    return 'An unexpected error occurred';
                }
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-[48em] text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Статус
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Дата
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Язык
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Время
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Память
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((submission, index) => (
                            <Submission submission={submission} key={index} />
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default SubmissionsTable;