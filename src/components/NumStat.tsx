import React from 'react';

interface Props {
    title?: string
    value: string
    description?: string
}

const NumStat = ({title, value, description}: Props) => {
    return (
        <div className="flex flex-col w-full bg-slate-200 p-2 rounded-md">
            <span className='text-xs font-semibold text-slate-600'>{title}</span>
            <h5 className='font-semibold text-2xl text-green-600'>{value}</h5>
            <span className='text-slate-500 text-[10px]'>{description}</span>
        </div>
    );
};

export default NumStat;