"use client"
import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import { twoSum } from "./TwoSum";
import Editor from '@monaco-editor/react';
import Playground from "./Playground";
import { Example, Problem } from "@/app/types/problem";


type WorkspaceProps = {
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
            explanation: string;
        }[]
    };
};

const Workspace: React.FC<WorkspaceProps> = (props) => {
    const {
        problem
    } = props;

    const [success, setSuccess] = useState(false);
    const [solved, setSolved] = useState(false);

    return (
        <Split className='split' minSize={0}>
            <ProblemDescription problem={problem} />
            <Playground problem={problem} />
        </Split>
    );
};
export default Workspace;