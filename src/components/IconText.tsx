import React from 'react';

interface Props {
    icon?: string
    title?: string
}

const IconText = ({icon, title}:Props) => {
    return (
        <div className="flex items-center gap-2">
            <i className={`${icon}`}></i>
            <span className='text-sm text-slate-500'>{title}</span>
        </div>
    );
};

export default IconText;