import clsx from 'clsx';
import React from 'react';

interface Props {
    percentage: string
}

const ProgressBar: React.FC<Props> = ({percentage}) => {
    return (
        <div>
            <span className="font-medium text-xs text-green-600 flex justify-end mb-1">{percentage}</span>
            <div className="flex flex-col relative">
                <div className="h-[5px] w-full rounded-full bg-slate-300"></div>
                <div className={clsx(`absolute top-0 h-[5px] w-[${percentage}] rounded-full bg-green-600`)}></div>
            </div>
        </div>
    );
};

export default ProgressBar;