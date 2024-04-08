'use client'
import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Split from "react-split";
import Workspace from '../components/Workspace/Workspace';
import NavB from './NavB';
import Foot from './foot';
import TableB from './TableB';


type TestPageProps = {

};

const TestPage: React.FC<TestPageProps> = () => {
    return (
        <>
            <div className='flex flex-col'>
                <NavB></NavB>
                <TableB></TableB>
                <div className='w-full h-20 left-0 bottom-0'>
                    <Foot></Foot>
                </div>
            </div>
        </>
    )
}
export default TestPage;