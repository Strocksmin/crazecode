import React from 'react';
import Footer from '../components/Footer/Footer';
import ProblemsTable from '../components/Problems/ProblemsTable';
import Navbar from '../components/Navbar/Navbar';
import FilterMenu from '../components/Filter/FilterMenu';

type TestPageProps = {
    
};

const TestPage:React.FC<TestPageProps> = () => {    
    return (
        <>
        <Navbar></Navbar>
        <main>
        <ProblemsTable />
        </main>
        <Footer />
        </>
    )
}
export default TestPage;