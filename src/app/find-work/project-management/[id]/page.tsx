import DotBadge from '@/components/DotBadge';
import SectionHeader from '@/components/SectionHeader';
import TaskHeader from '@/components/TaskHeader';
import Button from '@/components/UI/Button';
import TaskCard from '@/components/cards/TaskCard';
import React from 'react';
import { FiMoreHorizontal } from "react-icons/fi";

const SingleProject = () => {
    return (
        <div className='flex flex-col'>
            <SectionHeader 
                title={<>Project Management | <b>Safari Website</b></>} 
                fontWeight='font-normal'
            />

            {/* pad  */}
            <div className="bg-gradient-to-br from-white via-transparent to-transparent mt-3 p-1 rounded-md">
                {/* container  */}
                <div className="p-4 bg-gradient-to-br from-slate-200 to-transparent rounded">

                    <section className="flex justify-between ">
                        {/* greeting */}
                        <div className="">
                            <h3 className='text-xl'>Welcome back <b>Simba!</b></h3>
                            <span className='text-slate-400'>You have <b>3 tasks</b> to be completed.</span>
                        </div>

                        {/* task btn  */}
                        <Button className='bg-green-600 text-white flex gap-2'>
                            <i className="iconly-Plus text-lg"></i>
                            <span className='font-normal text-sm'>Create New Task</span>
                        </Button>

                    </section>

                    <div className="grid grid-cols-3 gap-3 mt-3">
                        <div className="flex flex-col gap-2">
                            <TaskHeader color='text-red-500' title='to do (2)' />
                            <TaskCard
                                title='Create Homepage' 
                                description='Implement landing page design.'
                                date='Fri, Jun 23'
                                badgeColor='red'
                                priority='High'
                            />
                            <TaskCard
                                title='Find Stock Images' 
                                description='Browse stock images online'
                                date='Fri, Jun 23'
                                badgeColor='green'
                                priority='Low'
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <TaskHeader color='text-orange-500' title='ongoing (1)' />
                            <TaskCard
                                title='Schedule Onboarding Meeting' 
                                description='Plan for a Team Meeting'
                                date='Fri, Jun 23'
                                badgeColor='blue'
                                priority='Medium'
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <TaskHeader color='text-green-500' title='completed (0)' />
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;