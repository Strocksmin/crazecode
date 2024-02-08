import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import { twoSum } from "./TwoSum";
import Editor from '@monaco-editor/react';
import Playground from "./Playground";


type WorkspaceProps = {
    //problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ /*problem*/ }) => {
    const [success, setSuccess] = useState(false);
    const [solved, setSolved] = useState(false);

    return (
        <Split className='split' minSize={0}>
            <ProblemDescription problem={twoSum} />
            <Playground problem={twoSum} />
        </Split>
    );
};
export default Workspace;