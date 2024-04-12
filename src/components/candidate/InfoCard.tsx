import clsx from 'clsx';
import React from 'react';

interface Props {
    icon?: string
    title?: string
    value?: string
    textVariant?:  string
}

const InfoCard = ({icon, title, value, textVariant}:Props) => {
    return (
        <div className="flex gap-5">
            <i className={`${icon} ${textVariant === 'dark' ? 'text-gray-500' : 'text-white'}  text-3xl`}></i>
            <div className={clsx("flex flex-col",
                {
                    'text-gray-800': textVariant === 'dark',
                    'text-white': textVariant !== 'dark'
                }
            )}>
                <div className='font-semibold'>{title}</div>
                <div className='text-sm'>{value}</div>
            </div>
        </div>
    );
};

export default InfoCard;