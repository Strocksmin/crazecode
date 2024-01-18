import React from 'react';
import { useState } from 'react';
import Problem from '../components/Problems/Problem';
import ProblemsTable from '../components/Problems/ProblemsTable';

type TestPageProps = {
    
};

const TestPage:React.FC<TestPageProps> = () => {    
    return (
        <ProblemsTable />
    )
}
export default TestPage;