import DataAcordion from '@/components/DataAcordion';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>

            <div className='  md:flex md:flex-row-reverse gap-2 p-5 mx-auto bg-black text-white'>
                <div className=' w-full md:w-[80%]'>{children}</div>
                <div className='w-full md:w-[20%]'>
                    <h1 className='font-bold text-xl pb-2'>Course content</h1>
                    <DataAcordion></DataAcordion>
                </div>
            </div>
        </div>
    );
};

export default layout;