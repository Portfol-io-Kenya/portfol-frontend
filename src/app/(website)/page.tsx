"use client"
import CountDown from '@/components/CountDown';
import Button from '@/components/UI/Button';
import ProjectCard from '@/components/cards/ProjectCard';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import HeroImage from '@/public/media/bgs/africa-map.png'
import Dashboard from '@/public/media/portfol-dash-4.webp'
import Jobs from '@/public/media/portfol-dash-2.webp'
import ioPro from '@/public/media/portfol-dash-1.webp'
import ioPay from '@/public/media/portfol-dash-5.webp'
import Card from '@/components/cards/Card';

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
          <Button onClick={() => router.push('/auth/login')} className='bg-yellow-900 text-neutral w-36 mt-4'>Get Started</Button>
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
      <div className="flex flex-col bg-yellow-900 text-neutral items-center justify-center py-48 px-32">
        <span className='text-center text-4xl leading-relaxed mb-20'>
          At <b>Portfolio</b>, we bridge the gap between talent and opportunity. Explore a world of 
          skilled African freelancers ready to bring your projects to life. Join us in reshaping the 
          future of work.
        </span>
        <Image 
          src={Dashboard}
          alt='portfol-jobs-dashboard'
        />
      </div>

      {/* features */}
      <div className="flex flex-col items-center p-20 backdrop-blur bg-white/50">
        <h3 className='text-2xl font-bold mb-12'>Platform Features</h3>
        {/* feature 1 */}
        <div className="mt-10 flex">
          <div className="basis-1/2 flex flex-col justify-center">
            <h4 className='font-bold text-xl mb-3'>Find Your Perfect Opportunity</h4>
            <p>
              Navigate our user-friendly platform with ease, ensuring a smooth experience for both 
              freelancers and clients
            </p>
            <Button onClick={() => router.push('/auth/login')} className='bg-primary text-white w-36 mt-4'>
              Start Now
            </Button>
          </div>
          <div className="basis-1/2">
            <Image
              src={Jobs} 
              alt='portfol.io-jobs-portal'
              className='drop-shadow-xl'
            />
          </div>
        </div>

        {/* feature 2 */}
        <div className="mt-40 flex">
          <div className="basis-1/2">
            <Image
              src={ioPro} 
              alt='portfol.io-jobs-portal'
              className='drop-shadow-xl'
            />
          </div>
          <div className="basis-1/2 flex flex-col justify-center pl-16">
            <h4 className='font-bold text-xl mb-3'>Stay On Top With io Pro</h4>
            <p>
              io Pro is our project management module. Manage and monitor your projects from within 
              the portal.
            </p>
            <Button onClick={() => router.push('/auth/login')} className='bg-primary text-white w-36 mt-4'>
              Start Now
            </Button>
          </div>
          
        </div>

         {/* feature 3 */}
         <div className="mt-40 flex">
          <div className="basis-1/2 flex flex-col justify-center">
            <h4 className='font-bold text-xl mb-3'>Use io Pay & Securely Manage Your Payments</h4>
            <p>
              io Pro is our project management module. Manage and monitor your projects from within 
              the portal.
            </p>
            <Button onClick={() => router.push('/auth/login')} className='bg-primary text-white w-36 mt-4'>
              Start Now
            </Button>
          </div>

          <div className="basis-1/2">
            <Image
              src={ioPay} 
              alt='portfol.io-jobs-portal'
              className='drop-shadow-xl rounded-lg'
            />
          </div>
          
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
          <h4 className='text-2xl text-neutral font-semibold'>Ready to Elevate Your Projects?</h4>
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
