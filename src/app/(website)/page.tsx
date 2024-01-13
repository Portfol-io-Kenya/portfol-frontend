"use client"
import CountDown from '@/components/CountDown';
import Button from '@/components/UI/Button';
import ProjectCard from '@/components/cards/ProjectCard';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import HeroImage from '@/public/media/bgs/africa-map.png'

export default function Home() {
  const router = useRouter();
  const isAuthenticated = true;


  return ( 
    <>
      {/* hero */}
      <div 
        className=""
        style={{
          backgroundImage: "url(/media/bgs/africa-bg.webp)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="bg-white/70 flex min-h-[80vh]">
        {/* col 1 */}
        <div className="flex flex-col basis-1/2 px-20 justify-center items-end">
          <h1 className='text-5xl'>
            Discover the  <br/><b>Power</b> of <br/><i>African Talent!</i>
          </h1>
          <Button onClick={() => router.push('/auth/login')} className='bg-yellow-900 text-white w-36 mt-4'>Get Started</Button>
        </div>

        {/* col 2 */}
        <div className="basis-1/2 flex items-center justify-center">
          <Image 
              src={HeroImage} 
              alt='portfol-logo' 
              width={600}
              className='mr-10'
          />
        </div>
      </div>

      {/* value proposition */}
      <div className="flex bg-yellow-900 text-white items-center justify-center py-48 px-32">
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
      <div 
        className=""
        style={{
          backgroundImage: "url(/media/bgs/pattern-3.jpg)",
          // backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col bg-black/80 p-20 items-center">
          <h4 className='text-2xl text-white font-semibold'>Ready to Elevate Your Projects?</h4>
          <div className="flex gap-2 justify-center">
            <Button onClick={() => router.push('/auth/signup')} className='bg-white w-36 mt-4'>Join Now</Button>
            <Button onClick={() => router.push('/auth/login')} className='bg-white w-36 mt-4'>Login</Button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
