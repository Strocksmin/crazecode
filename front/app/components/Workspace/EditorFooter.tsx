import React from 'react';

type EditorFooterProps = {
    handleSubmit: () => void;
};

const EditorFooter: React.FC<EditorFooterProps> = (props) => {
    const {
        handleSubmit
    } = props

    return (
        <>
            <div className='flex bg-[white] absolute bottom-0 z-10 w-full border-t'>
                <div className='mx-5 my-[10px] flex justify-between w-full'>
                    <div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
                        <button className='px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg pl-3 pr-2'>
                            Console
                            <div className='ml-1 transform transition flex items-center'>
                            </div>
                        </button>
                    </div>
                    <div className='ml-auto flex items-center space-x-4'>
                        <button
                            className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3  hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
                            onClick={handleSubmit}>
                            Run
                        </button>
                        <button
                            className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-black bg-dark-green-s hover:bg-green-3 rounded-lg'
                            onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditorFooter;