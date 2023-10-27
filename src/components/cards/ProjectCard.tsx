import React from 'react';
import Card from './Card';
import DotBadge from '../DotBadge';
import ProgressBar from '../UI/ProgressBar';
import Avatar from '../UI/Avatar';

const ProjectCard = () => {
    return (
        <Card
            image='url(/media/bgs/pattern-8.jpg)'
            bgColor='bg-gradient-to-br from-white via-white to-white/95'
            borderRadius='rounded-lg'
        >
            <h3 className='font-[600] text-2xl text-slate-700 mb-1'>Safari Website</h3>
            <div className="flex">
                <DotBadge className='text-red-500' text='5 Completed'/>
                <DotBadge className='text-red-500' text='5 Completed'/>
            </div>
            <p className='my-5 text-sm text-slate-600'>
                <span>Description:</span>
                <br/><br/>
                Ut enim ad minim veniam, quis nostrud exercitation
                laboris nisi ut aliquip ex ea commodo consequat. Ut
                minim veniam, quis nostrud exercitatiot.
            </p>

            <ProgressBar percentage='50%' />


            <div className="">
                <div className="flex mt-5">
                    <Avatar width='w-[30px]' height='h-[30px]' className={'rounded-full'} />
                    <Avatar width='w-[30px]' height='h-[30px]' className={'rounded-full -ml-3'} />
                    <Avatar width='w-[30px]' height='h-[30px]' className={'rounded-full -ml-3'} />
                </div>
                <span className='text-xs text-slate-500'>2 days ago</span>
            </div>
        </Card>
    );
};

export default ProjectCard;