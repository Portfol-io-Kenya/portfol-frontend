import Avatar from '@/components/UI/Avatar';
import Button from '@/components/UI/Button';
import Divider from '@/components/UI/Divider';
import Card from '@/components/cards/Card';
import SkillsCard from '@/components/cards/SkillsCard';
import React from 'react';

const SingleJob = () => {
    return (
        <div className='flex gap-3'>
            <div className="basis-3/4 flex flex-col gap-3">
                <Card className='p-0'>
                    <div 
                        className="h-48 w-full rounded-md"
                        style={{
                            backgroundImage: 'url(/media/bgs/pattern-4.jpg)',
                            backgroundPosition: 'center center',
                            backgroundSize: '80%',
                            borderRadius: '6px'
                        }}
                    ></div>

                    <div className="flex py-4 px-8">
                        <Avatar 
                            width='w-[200px]' 
                            height='h-[200px]' 
                            className='rounded-full -mt-32 border-8 border-white'
                            img='url(/media/bgs/pattern-7.jpg)'
                        />

                        <div className="flex flex-grow justify-between items-center ml-3">
                            <div className="flex flex-col">
                                <h4 className='font-semibold text-lg text-slate-700'>User Interface for a mobile app</h4>
                                <div className='flex gap-5'>
                                    <span className='text-xs text-slate-400'>UX/UI</span>
                                    <span className='text-xs text-slate-400'>|</span>
                                    <span className='text-xs text-slate-400'>Remote</span>
                                    <span className='text-xs text-slate-400'>|</span>
                                    <span className='text-xs text-slate-400'>$1,000 - $1, 500</span>
                                    <span className='text-xs text-slate-400'>|</span>
                                    <span className='text-xs text-slate-400'>3 - 6 months</span>
                                </div>
                            </div>

                            <Button className='bg-afrogreen text-neutral flex gap-2'>
                                <i className="iconly-Plus text-lg"></i>
                                <span className='font-normal text-sm'>Apply Now</span>
                            </Button>
                        </div>
                    </div>

                    <Divider
                        color='bg-gradient-to-r from-transparent via-slate-700 to-transparent'
                        className='mt-3'
                    />

                    <div className="flex justify-between py-5 pl-32 pr-10">
                        <div className="flex gap-2 items-center">
                            <i className="iconly-Location icbo"></i>
                            <span className="font-semibold">Nairobi, Kenya</span>
                        </div>
                        <div className="text-slate-500 text-xs">
                            Posted 5 hours ago
                        </div>
                    </div>

                </Card>

                <Card>
                    <h4 className='text-xl text-afrogreen font-semibold mb-3'>Project Description</h4>
                    <p className="text-slate-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    </p>
                </Card>
            </div>

            <div className="basis-1/4 flex flex-col gap-3 sticky top-[90px] h-[calc(100vh-100px)]">
                <SkillsCard />

                <Card>
                    <h5 className='text-afrogreen font-bold'>More by the Owner</h5>
                    <div className="flex gap-3 mt-3 items-center">
                        <Avatar className='rounded-full' img='url(/media/bgs/pattern-3.jpg)' />
                        <div className="flex flex-col">
                            <h6 className='font-medium text-sm'>Safari Website</h6>
                            <span className="text-slate-500 text-xs">UI/UX Design</span>
                        </div>
                    </div>
                    
                    <Divider className='bg-slate-300 mt-3 mb-4' />

                    <div className="flex justify-center">
                        <Button className='text-afrogreen place-self-center'>
                            <span className='text-xs'>View All</span>
                            <i className='iconly-Arrow-Right ml-2'></i>
                        </Button>
                    </div>
                    
                </Card>
            </div>
            
        </div>
    );
};

export default SingleJob;