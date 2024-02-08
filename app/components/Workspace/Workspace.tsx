import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import { twoSum } from "./TwoSum";


type WorkspaceProps = {
    //problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ /*problem*/ }) => {
    const [success, setSuccess] = useState(false);
    const [solved, setSolved] = useState(false);

    return (
        <Split className='split' minSize={0}>
            <ProblemDescription problem={twoSum} />
            <div className='bg-dark-fill-2'>
                Тут будет IDE
            </div>
        </Split>
    );
};
export default Workspace;