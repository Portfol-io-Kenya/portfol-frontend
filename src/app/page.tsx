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
          className="flex flex-col w-full h-full"
          style={{
            backgroundImage: "url(/media/bgs/portfolio-hero-landscape.webp)",
            backgroundSize: "cover",
            backgroundPosition: 'center center'
          }}
        >
          <div className="h-full flex flex-col items-center justify-center backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-3 md:pt-40">
              <button onClick={() => router.push('/auth/login')} className='bg-gray-600 text-white px-20 h-12 rounded-md'>Sign In</button>
              <button onClick={() => router.push('/auth/signup')} className='bg-green-600 text-white px-20 h-12 rounded-md'>Sign Up</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
