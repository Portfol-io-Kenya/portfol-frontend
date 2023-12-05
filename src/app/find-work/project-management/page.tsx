import SectionHeader from '@/components/SectionHeader';
import StatPill from '@/components/StatPill';
import Divider from '@/components/UI/Divider';
import Card from '@/components/cards/Card';
import ProjectCard from '@/components/cards/ProjectCard';
import RadialChart from '@/components/charts/RadialChart';
import React from 'react';

const ProjectManagement = () => {
    return (
        <div className='flex flex-col md:flex-row first-letter: gap-3'>
            <div className="flex flex-col basis-3/4">
                <SectionHeader title={'Project Management'} />
                
                <div className="grid md:grid-cols-2 gap-4 py-3">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>

            <div className="basis-1/4 sticky top-[90px] h-[calc(100vh-100px)] flex flex-col">
                <Card className=''>
                    <h4 className='text-2xl text-slate-500'>Hello, <b>Simba!</b></h4>
                    <Divider 
                        color='bg-gradient-to-r from-slate-400/10 via-slate-400 to-slate-400/10' 
                        className='my-4'
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <StatPill title='Total Projects' color='bg-blue-500' num='3' />
                        <StatPill title='Completed' color='bg-green-500' num='0' />
                        <StatPill title='Ongoing' color='bg-orange-500' num='2' />
                        <StatPill title='Out Of Schedule' color='bg-red-500' num='1' />
                    </div>
                    <RadialChart />
                </Card>
            </div>

            
            
        </div>
    );
};

export default ProjectManagement;