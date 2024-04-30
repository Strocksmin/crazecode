import { Problem } from '@/app/types/problem';
import React, { useState } from 'react';
import Submission from './Submission';
import SubmissionsTable from './SubmissionsTable';

type ProblemDescriptionProps = {
    problem: {
        id: number;
        number: number;
        title: string;
        statement: string;
        conditions: string;
        starterCode: string;
        starterFunctionName: string;
        examples: {
            id: number;
            input_text: string;
            output_text: string;
            explanation: string
        }[]
    };
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: number) => {
        setToggleState(index);
    }

    return (
        <>
            <div className='bg-[white] '>
                {/* TAB */}
                <div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-black border-b h-auto pl-[0.5em]'>
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-600 border-gray-200">
                        <li className="me-2">
                            <a href='#description' onClick={() => toggleTab(1)} aria-current="page" className={toggleState === 1 ? "inline-block p-4 text-black bg-gray-100 rounded-t-lg bg-gray-100" : "inline-block p-4 rounded-t-lg"}>Описание</a>
                        </li>
                        <li className="me-2">
                            <a href='#solution' onClick= {() => toggleTab(2)} className={toggleState === 2 ? "inline-block p-4 text-black bg-gray-100 rounded-t-lg bg-gray-100" : "inline-block p-4 rounded-t-lg"}>Теория</a>
                        </li>
                        <li className="me-2">
                            <a href='#submissions' onClick={() => toggleTab(3)} className={toggleState === 3 ? "inline-block p-4 text-black bg-gray-100 rounded-t-lg bg-gray-100" : "inline-block p-4 rounded-t-lg"}>Решения</a>
                        </li>
                    </ul>
                </div>

                <div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
                    <div className={toggleState === 1 ? "px-5 block" : "hidden"}>
                        {/*Content 1*/}
                        <div className='w-full'>
                            <div className='flex space-x-4'>
                                <div className='flex-1 mr-2 text-lg text-black font-medium'>{problem?.title}</div>
                            </div>
                            {/*!loading && currentProblem && (
							<div className='flex items-center mt-3'>
								<div
									className={`${problemDifficultyClass} inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
								>
									{"Сложность"}
								</div>
								{(solved || _solved) && (
									<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
										<BsCheck2Circle />
									</div>
								)}
								<div
									className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'
									
								>
									{liked && !updating && <AiFillLike className='text-dark-blue-s' />}
									{!liked && !updating && <AiFillLike />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />}

									<span className='text-xs'>{currentProblem.likes}</span>
								</div>
								<div
									className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'
								>
									{disliked && !updating && <AiFillDislike className='text-dark-blue-s' />}
									{!disliked && !updating && <AiFillDislike />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />}

									<span className='text-xs'>{currentProblem.dislikes}</span>
								</div>
								<div
									className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '
									onClick={handleStar}
								>
									{starred && !updating && <AiFillStar className='text-dark-yellow' />}
									{!starred && !updating && <TiStarOutline />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />}
								</div>
							</div>
                                )*/}

                            {/* Problem Statement(paragraphs) */}
                            <div className='text-black text-sm'>
                            <p className='mt-3'>
                                Given an array of integers <code>nums</code> and an integer <code>target</code>, return
                                <em>indices of the two numbers such that they add up to</em> <code>target</code>.
                                </p>
                                <p className='mt-3'>
                                You may assume that each input would have <strong>exactly one solution</strong>, and you
                                may not use thesame element twice.
                                </p>
                                <p className='mt-3'>You can return the answer in any order.</p>
                            </div>

                            {/* Examples */}
                            <div className='mt-4'>
                                {problem.examples.map((example, index) => (
                                    <div key={example.id}>
                                        <p className='font-medium text-black '>Example {index + 1}: </p>
                                        {/*example.img && <img src={example.img} alt='' className='mt-3' />*/}
                                        <div className='example-card'>
                                            <pre>
                                                <strong className='text-black'>Input: </strong> {example.input_text}
                                                <br />
                                                <strong>Output:</strong>
                                                {example.output_text} <br />
                                                {example.explanation && (
                                                    <>
                                                        <strong>Explanation:</strong> {example.explanation}
                                                    </>
                                                )}
                                            </pre>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Constraints */}
                            <div className='my-8 pb-4'>
                                <div className='text-black text-sm font-medium'>Constraints:</div>
                                <ul className='text-black ml-5 list-disc '>
                                    <div dangerouslySetInnerHTML={{ __html: problem.conditions }} />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "px-5 block" : "hidden"}>
                        {/*Content 2*/}
                        <div className='w-full '>
                            <div className='flex space-x-4'>
                                <div className='flex-1 mr-2 text-lg text-black font-medium'>{problem?.title}</div>
                            </div>
                            <div className='text-black text-sm'>
                            <p className='mt-3'>
                                Given an array of integers <code>nums</code> and an integer <code>target</code>, return
                                <em>indices of the two numbers such that they add up to</em> <code>target</code>.
                                </p>
                                <p className='mt-3'>
                                You may assume that each input would have <strong>exactly one solution</strong>, and you
                                may not use thesame element twice.
                                </p>
                                <p className='mt-3'>You can return the answer in any order.</p>
                            </div>
                            {/* Examples */}
                            <div className='mt-4'>
                                {problem.examples.map((example, index) => (
                                    <div key={example.id}>
                                        <p className='font-medium text-black '>Example {index + 1}: </p>
                                        {/*example.img && <img src={example.img} alt='' className='mt-3' />*/}
                                        <div className='example-card'>
                                            <pre>
                                                <strong className='text-black'>Input: </strong> {example.input_text}
                                                <br />
                                                <strong>Output:</strong>
                                                {example.output_text} <br />
                                                {example.explanation && (
                                                    <>
                                                        <strong>Explanation:</strong> {example.explanation}
                                                    </>
                                                )}
                                            </pre>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 3 ? "px-5 block" : "hidden"}>
                        {/*Content 3*/}
                        <div className='w-full'>
                            <div className='flex space-x-4'>
                                <SubmissionsTable problem_id={problem.id + 1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProblemDescription;