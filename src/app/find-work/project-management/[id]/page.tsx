import DotBadge from '@/components/DotBadge';
import SectionHeader from '@/components/SectionHeader';
import TaskHeader from '@/components/TaskHeader';
import Button from '@/components/UI/Button';
import TaskCard from '@/components/kanban/TaskCard';
import Kanban from '@/components/kanban/Kanban';
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

                    <section className="flex justify-between mb-3">
                        {/* greeting */}
                        <div className="">
                            <h3 className='text-xl'>Welcome back <b>Simba!</b></h3>
                            <span className='text-slate-400'>You have <b>3 tasks</b> to be completed.</span>
                        </div>

                        {/* task btn  */}
                        {/* <Button className='bg-green-600 text-white flex gap-2'>
                            <i className="iconly-Plus text-lg"></i>
                            <span className='font-normal text-sm'>Create New Task</span>
                        </Button> */}

                    </section>

                    <Kanban />

                </div>
            </div>
        </div>
    );
};

export default SingleProject;