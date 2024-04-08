import React from 'react';
import TableB from '../test/TableB';
import NavB from '../test/NavB';
import Foot from '../test/foot';

type ProblemsPageProps = {

};

const ProblemsPage: React.FC<ProblemsPageProps> = () => {

    return (
        <div className='flex flex-col'>
            <NavB></NavB>
            <TableB></TableB>
            <div className='w-full h-20 left-0 bottom-0'>
                <Foot></Foot>
            </div>
        </div>
    )
}
export default ProblemsPage;