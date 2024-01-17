import React from 'react';
import Navbar from '../components/Navbar/Navbar';

type ProblemsPageProps = {
    
};

const ProblemsPage:React.FC<ProblemsPageProps> = () => {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', width: '100%'}}>
        <Navbar></Navbar>
        <div style={{}}>Body</div>
        <div style={{}}>Footer</div>
        </div>
    )
}
export default ProblemsPage;