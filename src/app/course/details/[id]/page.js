import Videos from '@/components/Videos';
import getSingleData from '@/lib/getSingleData';
import React from 'react';

const page = async ({ params }) => {
    let { id } = params
    let data = await getSingleData(id)
    return (
        <div>
            <Videos data={data} />
        </div>
    );
};

export default page;