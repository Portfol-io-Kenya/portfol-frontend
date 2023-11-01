import clsx from 'clsx';
import React from 'react';

interface Props {
    color?: string
    className?: string
}

const HorizontalDivider: React.FC<Props> = ({color, className}) => {
    return (
        <div className={clsx(`w-[1px] h-full ${color ?? 'bg-slate-300'}`, className)}></div>
    );
};

export default HorizontalDivider;