import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProblemsTable from '../components/Problems/ProblemsTable';

type ProblemsPageProps = {
    
};

const ProblemsPage:React.FC<ProblemsPageProps> = () => {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', width: '100%'}}>
        <Navbar></Navbar>
        <ProblemsTable />
        <div style={{}}>Footer</div>
        </div>
    )
}
export default ProblemsPage;