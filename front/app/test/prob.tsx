import classnames from 'classnames';
import React from 'react';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Link from 'next/link';

type probProps = {
    problem: { problem_id: number, title: string, complexity: string, tags: string[] }
};

const prob: React.FC<probProps> = (props) => {
    const {
        problem
    } = props;



    return (
        <>
            <tr className="even:bg-white odd:bg-gray-50 border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <Link href={`/problems/${problem.problem_id}`} className='hover:text-blue-600 cursor-pointer' target='_blank'>
                        {problem.title}
                    </Link>
                </th>
                <td className={classnames('px-6 py-4 font-medium', {
                    "text-[#008000]": problem.complexity == "Easy",
                    "text-[#feac54]": problem.complexity == "Medium",
                    "text-[#fd1e37]": problem.complexity == "Hard",
                })}>
                    {problem.complexity}
                </td>
                <td className="px-6 py-4 font-medium inline-flex">
                    {problem.tags.map((tag) =>
                        <span className='mr-[1em] bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded border border-blue-400'>
                            {tag}
                        </span>)}
                </td>
                <td className="px-10 py-4 font-medium">
                    {problem.problem_id}
                </td>
                <td className="px-9 py-4 font-medium">
                    <HorizontalRuleIcon />
                </td>
            </tr >
        </>
    )
}
export default prob;