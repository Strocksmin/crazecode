import React from 'react';

type SubmissionProps = {
    
};

const Submission:React.FC<SubmissionProps> = () => {
    
    return (
        <div className='group flex h-[48px] cursor-pointer items-center justify-between px-3 py-0 transition-colors max-w-[631px]'>
        <div className='flex h-full w-full flex-shrink-0 items-center'>
            <div className='flex flex-shrink-0 flex-col justify-between w-[170px]'>
                <div className='flex flex-col items-start'>
                    <div className='truncate text-green-s dark:text-dark-green-s'>
                    <span className='text-green-s dark:text-dark-green-s text-sm font-medium'>
                        Принято
                    </span>
                    </div>
                    <span className='text-xs text-label-2 dark:text-dark-label-2'>
                        Apr 05, 2024
                    </span>
                </div>
            </div>
            <div className='flex flex-shrink-0 items-center w-[92px]'>
                <div className='bg-fill-primary dark:bg-fill-primary text-label-2 dark:text-dark-label-2 flex items-center gap-1 rounded-[9px] px-1.5 py-[1px] text-xs'>
                    TypeScript
                </div>
            </div>
            <div className='flex flex-shrink-0 items-center gap-1 pr-1 text-sm text-label-2 dark:text-dark-label-2 w-[100px]'>
                <div className='relative text-[14px] leading-[normal] before:block before:h-3.5 before:w-3.5'>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="svg-inline--fa fa-clock absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
                    </svg>
                </div>
                <div className='ellipsis line-clamp-1'>
                    61 ms
                </div>
            </div>
            <div className='flex flex-shrink-0 items-center gap-1 pr-1 text-sm text-label-2 dark:text-dark-label-2 w-[100px]'>
                <div className='relative text-[14px] leading-[normal] before:block before:h-3.5 before:w-3.5'>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="microchip" className="svg-inline--fa fa-microchip absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64h-8c-35.3 0-64 28.7-64 64v8H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v8c0 35.3 28.7 64 64 64h8v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h8c35.3 0 64-28.7 64-64v-8h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V184h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448v-8c0-35.3-28.7-64-64-64h-8V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM400 128V384c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16H384c8.8 0 16 7.2 16 16zM192 160c-17.7 0-32 14.3-32 32V320c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H192zm16 48h96v96H208V208z"></path>
                    </svg>
                </div>
                <div className='ellipsis line-clamp-1'>
                    52.7 MB
                </div>
            </div>
        </div>
    </div>
    )
}
export default Submission;