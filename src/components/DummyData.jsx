import { getDummydata } from '@/lib/getDummydata';
import React from 'react';
import DataCard from './DataCard';

const DummyData = async () => {
    const { products } = await getDummydata()

    return (
        <div>
            <h1 className='pb-3 uppercase font-bold text-center text-2xl'>All Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center  gap-3'>
                {
                    products?.map(d => (
                        <DataCard key={d.id} d={d}></DataCard>

                    ))

                }
            </div>
        </div>
    );
};

export default DummyData;