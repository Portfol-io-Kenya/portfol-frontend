"use client"
import CountDown from '@/components/CountDown';
import Button from '@/components/UI/Button';
import ProjectCard from '@/components/cards/ProjectCard';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const isAuthenticated = true;


  return ( 
    <>
      {/* hero */}
      <div className="flex min-h-[80vh]">
        {/* col 1 */}
        <div className="flex flex-col basis-1/2 px-20 justify-center">
          <h1 className='text-5xl'>
            Discover the  <br/><b>Power</b> of <br/><i>African Talent!</i>
          </h1>
          <Button className='bg-white w-36 mt-4'>Click</Button>
        </div>

        {/* col 2 */}
        <div className="basis-1/2">image</div>
      </div>

      {/* value proposition */}
      <div className="flex bg-slate-200 items-center justify-center py-48 px-32">
        <span className='text-center text-4xl leading-relaxed'>
          At <b>Portfolio</b>, we bridge the gap between talent and opportunity. Explore a world of 
          skilled African freelancers ready to bring your projects to life. Join us in reshaping the 
          future of work.
        </span>
      </div>

      {/* featured jobs */}
      <div className="flex flex-col items-center p-20">
        <h3 className='text-2xl font-bold'>Featured Jobs</h3>
        <div className="mt-10 grid grid-cols-3 gap-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      {/* auth cta  */}
      <div className="flex flex-col bg-black p-20 items-center">
        <h4 className='text-2xl text-white font-semibold'>Ready to Elevate Your Projects?</h4>
        <div className="flex gap-2 justify-center">
          <Button className='bg-white w-36 mt-4'>Join Now</Button>
          <Button className='bg-white w-36 mt-4'>Login</Button>
        </div>
      </div>
    </>
  )
}
