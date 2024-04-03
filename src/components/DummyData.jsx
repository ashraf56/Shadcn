import { getDummydata } from '@/lib/getDummydata';
import React from 'react';

const DummyData = async () => {
    const {products } = await getDummydata()
    console.log(products );
    return (
        <div className='grid grid-cols-3 mx-auto justify-center '>
            {
              products?.map(d => (
<p key={d.id}>{d.title} </p>

              ))
                
            }
        </div>
    );
};

export default DummyData;