import React from 'react';
import Avatar from './UI/Avatar';
import ProgressBar from './UI/ProgressBar';

interface Props {
    img?: string
    title: string
    location: string
    completion: string
}

const OngoingProject = ({img, title, location, completion}: Props) => {
    return (
        <div className="flex bg-slate-200 p-2 rounded-md">
            <Avatar img={img} className='rounded-full mr-2' width='w-[30px]' height='h-[30px]' />
            <div className="flex w-full justify-between">

                <div className="flex flex-col mr-5">
                    <h6 className='text-xs font-medium'>{title}</h6>
                    <span className='text-[10px] text-slate-500'>{location}</span>
                </div>

                <div className="flex flex-col grow">
                    <ProgressBar percentage={completion} />
                </div>
            </div>
        </div>
    );
};

export default OngoingProject;