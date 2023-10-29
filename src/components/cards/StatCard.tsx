import clsx from 'clsx';
import React from 'react';

interface Props {
    color?: string
    title: string
    value: string
}

const StatCard = ({color, title, value}: Props) => {
    return (
        <div className={clsx(`flex flex-col grow bg-gradient-to-r py-3 px-7 rounded-md text-white shadow-lg `, 
            'from-'+color+'-500', 'to-'+color+'-300', 'shadow'+color
        )}>
            <span className='uppercase tracking-[4px] text-[10px]'>{title}</span>
            <h5 className='text-2xl'>{value}</h5>
            <span className='text-xs'>+ 2% than last week</span>
        </div>
    );
};

export default StatCard;