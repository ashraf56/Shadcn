import getSingleData from '@/lib/getSingleData';
import React from 'react';

const Videos = async ({ data }) => {

  return (
    <div className='mx-auto px-3 pt-5'>
      <div>{data?.id}</div>
      <div className='justify-center items-center mx-auto'>
        <iframe width="100%" height="415" src="https://www.youtube.com/embed/O4AjymzpIEg?si=-jjCaj40w1fRo9AN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='p-3'>
          <h1 className='font-bold text-4xl '>{data?.title}</h1>
          <p className='font-bold text-xl '>{data?.price && 'price ' + '$' + data?.price}</p>
          <p className='font-bold text-base '>{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Videos;