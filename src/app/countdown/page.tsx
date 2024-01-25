import CountDown from '@/components/CountDown';
import React from 'react';

const Verified = () => {
   const date = (new Date("01/02/2024 00:00:00")).getTime()
    return (
        <div 
            className='h-screen' 
            style={{
            backgroundImage: "url(/media/portfol-logos/portfol-15.webp)",
            backgroundSize: "cover",
            backgroundPosition: 'center center'
          }}
        >
            <div className="h-full bg-black/80 flex flex-col items-center justify-center text-neutral">
                <p className='mb-5 text-lg'>Congratulations! You are on a waitlist to great opportunities that await ahead.</p>
                <CountDown targetDate={date} />
            </div>
        </div>
    );
};

export default Verified;