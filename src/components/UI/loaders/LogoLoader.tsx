"use client"
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@/lotties/loader-infinite.json';

const LogoLoader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      
    return (
        <div className='h-screen flex items-center justify-center'>
           <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    );
};

export default LogoLoader;