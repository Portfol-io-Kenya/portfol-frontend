"use client"
import Button from '@/components/UI/Button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const isAuthenticated = true;

  // useEffect(() => {
  //     isAuthenticated && router.push('/auth/login');
  // })

  return (
    <>
      <div className="flex h-screen w-screen">
        <div 
          className="basis-1/2 flex flex-col"
          style={{
            backgroundImage: "url(/media/bgs/portfol-landing.webp)",
            backgroundSize: "cover"
          }}
        >

        </div>
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <div className="flex gap-3">
            <Button onClick={() => router.push('/auth/login')} className='bg-gray-600 text-white px-20'>Sign In</Button>
            <Button onClick={() => router.push('/auth/signup')} className='bg-green-600 text-white px-20'>Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  )
}
