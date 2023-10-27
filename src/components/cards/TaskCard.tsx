import React from 'react';
import Card from './Card';
import Divider from '../UI/Divider';
import Avatar from '../UI/Avatar';
import Badge from '../UI/Badge';

interface Props {
    title: string
    date: string
    badgeColor?: string
    description: string
    views?: string
    priority: string
}

const TaskCard = ({title, date, badgeColor, description, views, priority}: Props) => {
    return (
        <Card>
            <div className="flex justify-between items-center mb-2">
                <Badge title={priority} color={badgeColor} />
                <span className='text-slate-400 text-xs'>
                    {date}
                </span>
            </div>
            <h4 className='text-sm font-[600]'>{title}</h4>
            <span className="text-slate-400 text-xs">{description}</span>

            <Divider 
                color='bg-gradient-to-r from-transparent via-slate-600 to-transparent' 
                className='my-4' 
            />

            <div className="flex justify-between">
                <Avatar width='w-[30px]' height='h-[30px]' className={'rounded-full'} />
                <div className="flex items-center gap-5 text-slate-500">
                    <div className='flex gap-1 items-center'>
                        <i className="iconly-Show"></i>
                        <span className='text-xs'>{views}</span>
                    </div>
                   
                    <i className="iconly-Send"></i>
                </div>
            </div>


        </Card>
    );
};

export default TaskCard;