import React, { useState } from 'react';
import EditorFooter from './EditorFooter';
import Split from "react-split";
import { Editor } from '@monaco-editor/react';
import { Problem } from '@/app/types/problem';

type PlaygroundProps = {
    problem: Problem
};

const Playground: React.FC<PlaygroundProps> = ({ problem }) => {

    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);


    return (
        <>
            <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
                <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
                    <div className='w-full overflow-hidden'>
                        <Editor height="90vh" theme='light'
                            defaultLanguage="typescript"
                            defaultValue={"function twoSum(nums: number[], target: number): number[] {\n    const m = new Map<number, number>();\n\n    for (let i = 0; i < nums.length; i++) {\n        const n = nums[i];\n        const diff = target - n;\n        if (m.has(diff)) return [m.get(diff)!, i];\n        else m.set(n, i);\n    }\n};"} />;

                    </div>
                    <div className='w-full px-5 overflow-auto' >
                        {/* testcase heading */}
                        <div className='flex h-10 items-center space-x-6'>
                            <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                                <div className='text-sm font-medium leading-5 text-black'>Testcases</div>
                                <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-black' />
                            </div>
                        </div>

                        <div className='flex'>
                            {problem.examples.map((example, index) => (
                                <div
                                    className='mr-2 items-start mt-2 '
                                    key={example.id}
                                    onClick={() => setActiveTestCaseId(index)}
                                >
                                    <div className='flex flex-wrap items-center gap-y-4'>
                                        <div
                                            className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCaseId === index ? "text-black" : "text-gray-500"}
									`}
                                        >
                                            Case {index + 1}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='font-semibold my-4'>
                            <p className='text-sm font-medium mt-4 text-black'>Input:</p>
                            <div className='example-card'>
                                <pre>{problem.examples[activeTestCaseId].input_text}</pre>
                            </div>
                            <p className='text-sm font-medium mt-4 text-black'>Output:</p>
                            <div className='example-card'>
                                <pre>{problem.examples[activeTestCaseId].output_text}</pre>
                            </div>
                        </div>
                    </div>
                </Split>
                <EditorFooter />
            </div>
        </>
    )
}
export default Playground;