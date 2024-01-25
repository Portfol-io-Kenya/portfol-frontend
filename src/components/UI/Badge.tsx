import clsx from 'clsx';
import React from 'react';

interface Props {
    color?: string
    bgColor?: string
    textColor?: string
    title?: string
}

const Badge = ({color, title, bgColor, textColor}: Props) => {
    return (
        <div className={clsx(`flex flex-col py-1 px-4 rounded font-semibold text-xs bg-${color}-500`, bgColor,
            {
                // 'bg-slate-300': !color,
                'bg-opacity-100': bgColor,
                'bg-opacity-20': !bgColor,  
                'bg-red-500 text-red-500': title === "High" && !color,          
                'bg-blue-500 text-blue-500': title === "Medium" && !color,          
                'bg-afrogreen text-afrogreen': title === "Low" && !color,          
            }
        )}>
            <span className={`text-${color}-500 ${textColor}`}>{title}</span>
        </div>
    );
};

export default Badge;