import clsx from 'clsx';
import React from 'react';

interface Props {
    title: string
    num: string
    color?: string
}

const StatPill: React.FC<Props> = ({color, title, num}) => {
    return (
        <div className={clsx(`flex flex-col p-2 rounded-md ${color} bg-opacity-20`,
            {
                'bg-slate-300': !color
            }
        )}>
            <h5 className='text-slate-500 text-sm'>{title}</h5>
            <div className="flex">
                <div className={`w-[3px] rounded-full my-1.5 ${color ?? 'bg-slate-500'} mr-3`}></div>
                <span className='text-2xl font-semibold'>{num}</span>
            </div>
        </div>
    );
};

export default StatPill;