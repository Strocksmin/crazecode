import React from 'react';

type SubmissionProps = {
    submission: {
        id: number,
        dateTime: number[],
        language: string,
        status: string,
        time: string,
        memory: string,
        problem_id: number
    }
};

const Submission: React.FC<SubmissionProps> = (props) => {

    const {
        submission
    } = props;

    return (
        <tr className="bg-white border-b text-[black]">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <span className={submission.status === "Success"
                    ? "bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                    : "bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded"}>
                    {submission.status}
                </span>
            </th>
            <td className="px-6 py-4">
                {submission.dateTime[2] + '.' + submission.dateTime[1] + '.' + submission.dateTime[0]}
            </td>
            <td className="px-6 py-4">
                {submission.language}
            </td>
            <td className="px-6 py-4">
                {submission.time !== null ? + submission.time + ' s' : ''}
            </td>
            <td className="px-6 py-4">
                {submission.memory !== null ? + submission.memory + ' kb' : ''}
            </td>
        </tr >
    )
}
export default Submission;