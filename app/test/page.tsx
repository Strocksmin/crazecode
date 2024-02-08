'use client'
import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Split from "react-split";
import Workspace from '../components/Workspace/Workspace';


type TestPageProps = {
    
};

const TestPage:React.FC<TestPageProps> = () => {    
    return (
        <>
        <Navbar></Navbar>
        <main>
        <Workspace></Workspace>
        </main>
        </>
    )
}
export default TestPage;