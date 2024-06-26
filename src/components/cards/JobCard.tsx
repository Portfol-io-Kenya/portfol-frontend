"use client"
import React from 'react';
import Avatar from '../UI/Avatar';
import Card from './Card';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface Props {
    title: string,
    location: string,
    img?: any
    description: string
    className?: string
}

const JobCard: React.FC<Props> = ({title, location, img, description, className}) => {
    const pathname = usePathname()
    return (
        <Card className={clsx(`bg-white mb-3 p-4 w-full ${className}`)}>
            <div className="flex flex-col md:flex-row">
                <div className="flex md:flex-grow">
                    {/* job random ankara avatar  */}
                    <Avatar img={img} className={'mr-5 bg-no-repeat'}/>

                    {/* job small details  */}
                    <div className="flex flex-col">
                        <h4 className='font-semibold'>
                            <Link href={`${pathname}/1`}>
                                {title}
                            </Link>
                        </h4>
                        <div className='flex gap-1 md:gap-5'>
                            <span className='text-xs text-slate-400'>UX/UI</span>
                            <span className='text-xs text-slate-400'>|</span>
                            <span className='text-xs text-slate-400'>Remote</span>
                            <span className='text-xs text-slate-400'>|</span>
                            <span className='text-xs text-slate-400'>$1,000</span>
                            <span className='text-xs text-slate-400'>|</span>
                            <span className='text-xs text-slate-400'>3 - 6 months</span>
                        </div>
                    </div>

                </div>

                {/* location  */}
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center">
                        <i className='text-lg text-slate-700 iconly-Location icbo'></i>
                        <span className='font-medium ml-4'>{location}</span>
                    </div>
                    <span className='text-xs text-slate-400'>Posted 5 hours ago</span>
                </div>
            </div>

            <div className="text-sm text-slate-500 py-3 mb-5">
                <p>{description}</p>
            </div>

            <div className="flex">
                <div className="basis-10/12">
                    <i className='text-lg text-afrogreen iconly-Bookmark icbo'></i>
                </div>

                <div className="basis-2/12 flex justify-between">
                    <span className='flex items-center'>
                        <i className='text-lg text-orange-300 iconly-Star icbo'></i>
                        <span className='text-xs text-slate-500 ml-2'>5.0</span>
                    </span>

                    <i className='text-lg text-blue-400 iconly-Shield-Done icbo'></i>
                    
                </div>
            </div>
        </Card>
    );
};

export default JobCard;