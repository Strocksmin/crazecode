import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProblemsTable from '../components/Problems/ProblemsTable';
import Footer from '../components/Footer/Footer';

type ProblemsPageProps = {
    
};

const ProblemsPage:React.FC<ProblemsPageProps> = () => {
    
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
export default ProblemsPage;