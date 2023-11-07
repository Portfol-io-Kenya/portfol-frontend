"use client"
import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from "@dnd-kit/utilities"
import Card from '../cards/Card';
import Divider from '../UI/Divider';
import Avatar from '../UI/Avatar';
import Badge from '../UI/Badge';
import Draggable from './Draggable';

interface Props {
    item?: any
    title: string
    date: string
    badgeColor?: string
    description: string
    views?: string
    priority: string
    id: string
    parent: string
}

const TaskCard = ({item, id, parent, title, date, description, views, priority}: Props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: title,
        data: {
          title, id, parent
        },
    });
    const style = {
        transform: CSS.Translate.toString(transform)
    }

    return (
        <div style={style} {...listeners} {...attributes} ref={setNodeRef}>
            <Card>
                <div className="flex justify-between items-center mb-2">
                    <Badge title={priority} />
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
        </div>
    );
};

export default TaskCard;