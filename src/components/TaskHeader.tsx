import React from 'react';
import DotBadge from './DotBadge';
import { FiMoreHorizontal } from 'react-icons/fi';

interface Props {
    title?: string
    color?: string
}

const TaskHeader: React.FC<Props> = ({title, color}) => {
    return (
        <div className="flex justify-between items-center bg-white py-4 px-10 rounded-md">
            <DotBadge className={`${color ?? 'text-slate-500'}`}  />
            <span className='uppercase tracking-[.5em] text-sm'>{title}</span>
            <FiMoreHorizontal 
                className='text-slate-400 text-4xl'
            />
        </div>
    );
};

export default TaskHeader;