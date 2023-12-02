import React from 'react';

interface Props {
    value: number
    label: string
}
const TimeItem = ({value, label}:Props) => {
    return (
        <div className='flex flex-col items-center w-52 h-52 justify-center bg-white text-black rounded-xl'>
            <p className="text-6xl font-bold">{value}</p>
            <p className="uppercase tracking-[10px] font-semibold">{label}</p>
        </div>
    );
};

export default TimeItem;