import React from 'react';

type searchProps = {
    onSetSearchTerm: (searchTerm: React.SetStateAction<string>) => void
    searchTerm: string
};

const search: React.FC<searchProps> = (props) => {
    const {
        onSetSearchTerm,
        searchTerm
    } = props;

    const handleChange = (e: any) => {
        onSetSearchTerm(e.target.value);
    };

    return (
        <>
            <div className='flex items-center'>
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                        </svg>
                    </div>
                    <input value={searchTerm} onChange={handleChange} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search problem..." required />
                </div>
            </div>
        </>
    )
}
export default search;