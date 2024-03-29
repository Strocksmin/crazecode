import React, { useState } from 'react';
import EditorFooter from './EditorFooter';
import Split from "react-split";
import { toast } from "react-toastify";
import { Editor, OnChange } from '@monaco-editor/react';
import { Problem } from '@/app/types/problem';
import LanguagesDropdown from './LanguagesDropdown';
import { languageOptions } from '@/app/constants/languages';
import axios from "axios";

type PlaygroundProps = {
    problem: Problem
};

const Playground: React.FC<PlaygroundProps> = ({ problem }) => {
    const [value, setValue] = useState("");
    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
    const [language, setLanguage] = useState(languageOptions[0]);

    const handleEditorChange = (value: any) => {
        setValue(value);
    };

    const onSelectChange = (sl: any) => {
        setLanguage(sl);
    };

    const handleSubmit = async () => {
        const formData = {
            language_id: language.id,
            source_code: btoa(value),
          };
          const options = {
            method: "POST",
            url: "http://localhost:8080/submit",
            params: {fields: "*" },
            headers: {
              "content-type": "application/json",
              "Content-Type": "application/json",
            },
            data: formData,
          };
      
          axios
            .request(options)
            .then(function (response) {
              console.log("res.data", response.data);
              //const token = response.data.token;
            })
            .catch((err) => {
              let error = err.response ? err.response.data : err;
              // get error status
              let status = err.response.status;
              console.log("status", status);
              if (status === 429) {
                console.log("too many requests", status);
              }
              console.log("catch block...", error);
            });
	};

    return (
        <>
            <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
                <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
                    <div className='w-full overflow-hidden'>
                        <div className="px-4 py-2">
                        <LanguagesDropdown onSelectChange={onSelectChange} />
                        </div>
                        <Editor
                            height="90vh"
                            theme='light'
                            defaultLanguage="typescript"
                            defaultValue={"function twoSum(nums: number[], target: number): number[] {\n    const m = new Map<number, number>();\n\n    for (let i = 0; i < nums.length; i++) {\n        const n = nums[i];\n        const diff = target - n;\n        if (m.has(diff)) return [m.get(diff)!, i];\n        else m.set(n, i);\n    }\n};"}
                            value={value}
                            onChange={handleEditorChange}
                        />;
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
                <EditorFooter handleSubmit={handleSubmit}/>
            </div>
        </>
    )
}
export default Playground;