import StatPill from '@/components/StatPill';
import Avatar from '@/components/UI/Avatar';
import Button from '@/components/UI/Button';
import Divider from '@/components/UI/Divider';
import Pill from '@/components/UI/Pill';
import Awards from '@/components/candidate/Awards';
import Education from '@/components/candidate/Education';
import Experience from '@/components/candidate/Experience';
import InfoCard from '@/components/candidate/InfoCard';
import Card from '@/components/cards/Card';
import SkillsCard from '@/components/cards/SkillsCard';
import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';

const SingleCandidate = () => {
    return (
        <div className="flex gap-3">
            <div className="basis-3/4 flex flex-col gap-3">
                <Card className='p-0'>
                    <div 
                        className="h-12 w-full rounded-md"
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
                            className='rounded-full -mt-12 border-8 border-white'
                            img='url(/media/bgs/pattern-7.jpg)'
                        />

                        <div className="flex flex-grow justify-between items-center ml-3">
                            <div className="flex flex-col">
                                <h4 className='font-semibold text-lg text-slate-700'>John Banda</h4>
                                <div className='flex gap-5 items-center'>
                                    <span className='text-secondary font-medium mr-10'>Candidate</span>
                                    <span className='text-xs text-slate-400'>Nairobi, Kenya</span>
                                    <span className='text-xs text-slate-400'>|</span>
                                    <span className='text-xs text-slate-400'>$500p/m</span>
                                </div>
                                <div className='flex gap-3 mt-5'>
                                    <Pill text='Websites' />
                                    <Pill text='Apps' />
                                    <Pill text='Mobile' />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button size='small' className='bg-afrogreen text-neutral flex gap-2 rounded-full'>
                                    <i className="iconly-Download text-lg"></i>
                                    <span className='font-normal text-sm'>Download CV</span>
                                </Button>

                                <Button size='small' className='bg-afrogreen text-neutral flex gap-2 rounded-full'>
                                    <span className='font-normal text-sm'>Invite</span>
                                </Button>
                            </div>

                            
                        </div>
                    </div>
                </Card>

                <Card>
                    <h3 className='font-semibold text-xl'>About Candidate</h3>
                    <p className='text-slate-600 text-sm mt-3'>
                        {`Hello my name is Simba Moyo and web developer from Zimbabwe. In pharetra orci 
                        dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. 
                        Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante 
                        erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum 
                        sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.
                        
                        Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est.
                        Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. 
                        Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar.`}
                    </p>
                </Card>

                <Card>
                    <h4 className='text-xl font-semibold'>Location</h4>
                    <p className='text-slate-600 text-sm mt-3'>
                        Google Maps API
                    </p>
                </Card>

                <Card>
                    <h4 className="text-xl font-semibold mb-5">Education</h4>
                    <Education />
                    <Education />
                </Card>

                <Card>
                    <h4 className="text-xl font-semibold mb-5">Work & Experience</h4>
                    <Experience />
                    <Experience />
                </Card>

                <Card>
                    <h4 className="font-semibold text-xl mb-3">Portfolio</h4>
                    <div 
                        className="h-72 w-72 rounded-md"
                        style={{
                            backgroundImage: 'url(/media/bgs/pattern-4.jpg)',
                            backgroundPosition: 'center center',
                            backgroundSize: '80%',
                            borderRadius: '6px'
                        }}
                    ></div>
                </Card>

                <Card>
                    <h4 className="text-xl font-semibold mb-5">Awards</h4>
                    <Awards />
                    <Awards />
                </Card>

                <Card>
                    <h4 className="text-xl font-semibold mb-5">Reviews</h4>
                </Card>

                <Card>
                    <h4 className="text-xl font-semibold mb-5">Related Candidates</h4>
                </Card>
            </div>
            
            <div className="flex flex-col basis-1/4 gap-3">
                <Card bgColor='bg-primary' className='flex flex-col gap-7'>
                    <InfoCard icon='iconly-Wallet' title='Offered Salary' value='$7,000' />
                    <InfoCard icon='iconly-Calendar' title='Experience Time' value='5 years' />
                    <InfoCard icon='iconly-Profile' title='Gender' value='Male' />
                    <InfoCard icon='iconly-Call' title='Phone Number' value='123 456 7890' />
                    <InfoCard icon='iconly-Send' title='Email' value='example@email.com' />
                    <InfoCard />
                </Card>

                <Card>
                    <div className="flex justify-between">
                        <h5>Social Profiles:</h5>
                        <div className="flex items-center gap-3">
                            <BsTwitter />
                            <BsFacebook />
                            <FiInstagram />
                            <BsLinkedin />
                        </div>
                    </div>
                </Card>

                <SkillsCard />

                <Card>
                    <h5 className='font-semibold mb-3'>CV</h5>
                    <div className="rounded bg-primary/20 px-3 py-5 flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className='text-sm'>Candidate CV Name</span>
                            <span className='font-semibold'>PDF</span>
                        </div>
                        <i className="iconly-Document text-4xl"></i>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SingleCandidate;