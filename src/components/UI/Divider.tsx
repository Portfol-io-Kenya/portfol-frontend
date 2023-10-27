import clsx from 'clsx';
import React from 'react';

interface Props {
    color?: string
    className?: string
}

const Divider: React.FC<Props> = ({color, className}) => {
    return (
        <div className={clsx(`w-full h-[1px] ${color ?? 'bg-slate-400'}`, className)}></div>
    );
};

export default Divider;