import React from 'react';

interface Props {
    value: string
    title: string
}

const SimpleStat = ({value, title}: Props) => {
    return (
        <div className="flex flex-col items-center">
            <h5 className='text-sm'>{value}</h5>
            <span className='text-[10px] text-slate-400'>{title}</span>
        </div>
    );
};

export default SimpleStat;