import Button from '@/components/UI/Button';
import WebSectionHeader from '@/components/WebSectionHeader';
import React from 'react';

const HowItWorksPage = () => {
    return (
        <div className='flex flex-col'>
            {/* header  */}
            <WebSectionHeader title='How It Works' />

            {/* step by step guide */}
            <div className="flex py-40 px-20">
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Step by step <br /> <b>Guide</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                    Simple Steps, Seamless Solutions. <br />
                    Navigate our user-friendly platform with ease, ensuring a smooth experience for both 
                    freelancers and clients.
                    </p>
                </div>
                <div className="basis-1/2">image</div>
            </div>

            {/* step by step guide */}
            <div className="flex py-20 px-20">
                <div className="basis-1/2">image</div>
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Visual<br /> <b>aids</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                        Visualize Success! <br /> 
                        Our intuitive infographics guide you through the process, making collaboration effortless
                    </p>
                </div>
            </div>

            {/* security highlights */}
            <div className="flex py-20 px-20 bg-black">
                <div className="flex items-center">
                    <h4 className='text-white text-3xl'>
                        Your Security, <b>Our Priority.</b> 
                    </h4>
                </div>
                
                <div className="flex flex-col">
                    <p className='text-xl text-white'>
                        Discover the peace of mind that comes with our secure and user-friendly environment.
                    </p>
                    <Button className='bg-white w-36 mt-4'>Join Now</Button>
                </div>
                

            </div>
            
        </div>
    );
};

export default HowItWorksPage;