"use client"
import Navbar from '@/app/components/Navbar/Navbar';
import Workspace from '@/app/components/Workspace/Workspace';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import useSWR from 'swr'

type ProblemPageProps = {
    params: {pid:number}
};

type problem = {
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
}

async function getProblem(pid: number) {
    try {
    const response = await fetch(`http://localhost:8080/problem/${pid}`);
    const problemDescription = await response.json();
    return problemDescription
    }
    catch (error) {
        console.log(error);
    }
}
  
const ProblemPage:React.FC<ProblemPageProps> = ({ params }: { params: { pid: number } }) => {
    
    const problemExample = {
        id: 0,
        number: 0,
        title: 'Loading...',
        statement: 'Loading...',
        conditions: 'Loading...',
        starterCode: 'Loading...',
        starterFunctionName: 'Loading...',
        examples: [{
        id: 0,
        input_text: 'Loading...',
        output_text: 'Loading...',
        explanation: 'Loading...'
        }]
    }

    const [problemDescription, setProblemDescrption] = useState(problemExample);

    useEffect(() => {
        async function fetchData() {
            try {
          const response = await fetch(`http://localhost:8080/problem/${params.pid}`);
          const data = await response.json();
          setProblemDescrption(data);
        }
          catch (error) {console.log(error + "Ошибка")}
        }
        fetchData();
      }, []);
      /*const response = await fetch(`http://localhost:8080/problem/${pid}`); */
    /*let problemDescription = getProblem(params.pid);*/
    return (
        <>
        <Navbar></Navbar>
        <main>
        <Workspace problem={problemDescription}></Workspace>
        </main>
        </>
    )
}
export default ProblemPage;
// TODO: prerender all useeffect