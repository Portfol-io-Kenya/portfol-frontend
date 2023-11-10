"use client"
import JobsHero from "@/components/JobsHero";
import JobCard from "@/components/cards/JobCard";
import LogoLoader from "@/components/UI/loaders/LogoLoader";
import { useJobs } from "@/rest-api/jobs";
import { Job } from "@/types";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";

const JOBS = [
    {title: 'User Interface for a mobile app', location: 'Nairobi, Kenya', avatar: 'url(/media/bgs/pattern-7.jpg)'},
    {title: 'Copywiter for a fashion blog', location: 'Lagos, Nigerua', avatar: 'url(/media/bgs/pattern-6.jpg)'},
    {title: 'Professional photographer', location: 'Harare, Zimbabawe', avatar: 'url(/media/bgs/pattern-3.jpg)'},
    {title: 'Swahili interpreting services', location: 'Pretoria, South Africa', avatar: 'url(/media/bgs/pattern-5.jpg)'},
]

export default function JobsHome () {
    const {jobs} = useJobs();

    return (
        <>
            <JobsHero />
            <Suspense fallback={<LogoLoader />}>
                {jobs.map((job, index) => (
                    <JobCard 
                        key={index} 
                        title={job.jobTitle} 
                        location={job.location} 
                        img={job.avatar} 
                        description={job.detail[0].desc}
                    />
                ))}
            </Suspense>
            
        </>
    )
}