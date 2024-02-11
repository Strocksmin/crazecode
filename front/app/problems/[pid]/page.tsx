import Navbar from '@/app/components/Navbar/Navbar';
import Workspace from '@/app/components/Workspace/Workspace';
import React from 'react';

type ProblemPageProps = {
    params: {pid:string}
};

const ProblemPage:React.FC<ProblemPageProps> = ({ params }: { params: { pid: string } }) => {
    
    return (
        <>
        <Navbar></Navbar>
        <main>
        <Workspace></Workspace>
        </main>
        </>
    )
}
export default ProblemPage;

