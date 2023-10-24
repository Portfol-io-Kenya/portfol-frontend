import JobsHero from "@/components/JobsHero";
import JobCard from "@/components/cards/JobCard";

const JOBS = [
    {title: 'User Interface for a mobile app', location: 'Nairobi, Kenya', avatar: 'url(/media/bgs/pattern-7.jpg)'},
    {title: 'Copywiter for a fashion blog', location: 'Lagos, Nigerua', avatar: 'url(/media/bgs/pattern-6.jpg)'},
    {title: 'Professional photographer', location: 'Harare, Zimbabawe', avatar: 'url(/media/bgs/pattern-3.jpg)'},
    {title: 'Swahili interpreting services', location: 'Pretoria, South Africa', avatar: 'url(/media/bgs/pattern-5.jpg)'},
]

export default function JobsHome () {
    return (
        <>
            <JobsHero />
            {JOBS.map((job, index) => <JobCard key={index} title={job.title} location={job.location} img={job.avatar} />)}
            
        </>
    )
}