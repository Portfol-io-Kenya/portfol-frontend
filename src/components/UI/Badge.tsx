import clsx from 'clsx';
import React from 'react';

interface Props {
    color?: string
    bgColor?: string
    textColor?: string
    title: string
}

const Badge = ({color, title, bgColor, textColor}: Props) => {
    return (
        <div className={clsx(`flex flex-col py-1 px-4 rounded font-semibold text-xs bg-${color}-500 bg-opacity-20`, bgColor,
            {
                'bg-slate-300': !color,
                'bg-opacity-100': bgColor
            }
        )}>
            <span className={`text-${color}-500 ${textColor}`}>{title}</span>
        </div>
    );
};

export default Badge;