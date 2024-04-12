import IconText from '@/components/IconText';
import Button from '@/components/UI/Button';
import Pill from '@/components/UI/Pill';
import InfoCard from '@/components/candidate/InfoCard';
import Card from '@/components/cards/Card';
import JobCard from '@/components/cards/JobCard';
import ContactForm from '@/components/employer/ContactForm';
import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';

const JOBS = [
    {title: 'User Interface for a mobile app', location: 'Nairobi, Kenya', avatar: 'url(/media/bgs/pattern-7.jpg)'},
    {title: 'Copywiter for a fashion blog', location: 'Lagos, Nigerua', avatar: 'url(/media/bgs/pattern-6.jpg)'},
    {title: 'Professional photographer', location: 'Harare, Zimbabawe', avatar: 'url(/media/bgs/pattern-3.jpg)'},
]

const SingleEmployer = () => {
    return (
        <div className='flex gap-3'>
            <div className="basis-3/4 flex flex-col gap-3">
                <Card className='flex items-center gap-3'>
                    <div className="h-24 w-24 rounded-lg bg-slate-700 text-white">logo</div>
                    <div className="flex flex-col grow">
                        <div className="flex gap-3 items-center">
                            <h4 className='font-semibold text-lg'>Portfolio </h4>
                            <span className='text-xs text-primary'>Featured</span>
                        </div>

                        <div className="flex gap-6 my-2">
                            <IconText icon='iconly-Work' title='Application'/>
                            <IconText icon='iconly-Location' title='Nairobi, Kenya'/>
                            <IconText icon='iconly-Call' title='123 456 789'/>
                            <IconText icon='iconly-Message' title='email@example.com'/>
                        </div>

                        <Pill text='Open Jobs - 5' />
                    </div>
                    <div className="flex justify-end items-center">
                        <Button className='bg-primary text-white text-xs font-normal' size='small'>
                            Private Message
                        </Button>
                        <div className="px-3 flex items-center">
                            <i className='iconly-Bookmark text-2xl text-primary'></i>
                        </div>
                    </div>
                </Card>

                <Card>
                    <h3 className='font-semibold text-xl'>About Company</h3>
                    <p className='text-slate-600 text-sm mt-3'>
                        {`In pharetra orci 
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
                    <div className="flex gap-5">
                        <h5 className='font-semibold text-xl'>Social Profiles:</h5>
                        <div className="flex items-center gap-3">
                            <BsTwitter />
                            <BsFacebook />
                            <FiInstagram />
                            <BsLinkedin />
                        </div>
                    </div>
                </Card>

                <Card>
                    <h3 className='font-semibold text-xl'>Portfolio</h3>


                </Card>

                <Card>
                    <div className="flex justify-between mb-5 items-center">
                        <h5 className='font-semibold text-xl'>Open Positions</h5>
                        <Link href={'#'} className='text-xs text-primary'>{"Browse full list >>"}</Link>
                    </div>
                    {JOBS.map((job, index) => (
                        <JobCard 
                            className='border border-slate-300 rounded-lg'
                            key={index} 
                            title={job.title} 
                            location={job.location} 
                            img={job.avatar} 
                            description={`Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est.
                            Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus.`}
                        />
                    ))}

                </Card>
            </div>

            {/* Col 2  */}
            <div className="basis-1/4 flex flex-col gap-3">
                <Card className='flex flex-col gap-7'>
                    <InfoCard textVariant='dark' icon='iconly-Calendar text-gray-800' title='Founded Date' value='2023' />
                    <InfoCard textVariant='dark' icon='iconly-Location text-gray-800' title='Location' value='Nairobi, Kenya' />
                    <InfoCard textVariant='dark' icon='iconly-Profile text-gray-800' title='Company Size' value='50-60' />
                    <InfoCard textVariant='dark' icon='iconly-Call text-gray-800' title='Phone Number' value='123 456 7890' />
                    <InfoCard textVariant='dark' icon='iconly-Send text-gray-800' title='Email' value='example@email.com' />
                </Card>

                <Card>
                    <h5 className='font-semibold text-xl'>Employer Location</h5>
                    Google Maps API
                </Card>

                <Card>
                    <h5 className='font-semibold text-xl'>Contact Portfolio</h5>
                    <ContactForm />
                </Card>
            </div>
        </div>
    );
};

export default SingleEmployer;