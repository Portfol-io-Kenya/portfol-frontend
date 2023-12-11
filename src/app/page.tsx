"use client"
import CountDown from '@/components/CountDown';
import Button from '@/components/UI/Button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const isAuthenticated = true;
  const date = (new Date("01/02/2024 00:00:00")).getTime()

  // useEffect(() => {
  //     isAuthenticated && router.push('/auth/login');
  // })

  return (
    
    <>
      <div className="flex h-screen w-screen">
        <div 
          className="flex flex-col w-full h-full"
          style={{
            backgroundImage: "url(/media/bgs/portfolio-hero-landscape.webp)",
            backgroundSize: "cover",
            backgroundPosition: 'center center'
          }}
        >
          <div className="h-full flex flex-col items-center justify-center md:justify-end  backdrop-blur-sm md:backdrop-blur-none">

            <div className="flex flex-col md:flex-row gap-3 md:pt-40">
              <button onClick={() => router.push('/auth/login')} className='bg-gray-600 text-white px-20 h-12 rounded-md'>Sign In</button>
              <button onClick={() => router.push('/auth/signup')} className='bg-green-600 text-white px-20 h-12 rounded-md'>Sign Up</button>
            </div>

            <div className="pt-16 md:pt-6 md:pb-12">
              <div className="hidden md:block">
                <CountDown targetDate={date} variant={'dark'} size='medium' />
              </div>

              <div className="md:hidden">
                <CountDown targetDate={date} variant={'dark'} size='small' />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
