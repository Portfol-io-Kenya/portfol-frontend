import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const HeadBodyGrid = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Skeleton 
        className='bg-blue-400 ' 
        baseColor='#d0d0d0'
        highlightColor='#e9e9e9'
        height={150}
        count={5}
      />  
    </div>
  );
};

export default HeadBodyGrid;