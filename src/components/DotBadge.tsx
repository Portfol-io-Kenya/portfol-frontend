import React from 'react';
import { GoDotFill } from "react-icons/go";

interface Props {
    className?: string
    text?: string
}

const DotBadge: React.FC<Props> = ({className, text}) => {
    return (
        <div className='flex items-center mr-3'>
            <GoDotFill className={className} />
            <span className='text-xs text-slate-500 ml-2'>{text}</span>
        </div>
    );
};

export default DotBadge;