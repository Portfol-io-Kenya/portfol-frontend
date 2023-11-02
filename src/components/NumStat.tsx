import clsx from 'clsx';
import React from 'react';

interface Props {
    title?: string
    value: string
    description?: string
    className?: string
    bgColor?: string
    titleStyle?: string
    textWhite?: boolean
}

const NumStat = ({title, value, description, className, bgColor, titleStyle, textWhite}: Props) => {
    return (
        <div className={clsx(`flex flex-col p-2 rounded-md`, className, bgColor, {
            'bg-slate-300': !bgColor,
        })}>
            <span className={clsx('text-xs font-semibold', {
                'text-slate-600': !textWhite
            })}>{title}</span>
            <h5 className={clsx(`font-semibold text-2xl text-green-600`, titleStyle)}>{value}</h5>
            <span className={clsx('text-[10px]', {
                'text-slate-500': !textWhite
            })}>{description}</span>
        </div>
    );
};

export default NumStat;