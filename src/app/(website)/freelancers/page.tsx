import Button from '@/components/UI/Button';
import React from 'react';

const FreelancersPage = () => {
    return (
        <div className='flex flex-col'>
            {/* connect  */}
            <div className='p-20 flex flex-col items-center rounded-lg bg-white mx-5 mt-5'>
                <h2 className='text-center text-3xl px-20'>
                    Join <i>the <b>Community!</b></i> <br /> 
                    Create your profile,  showcase <i>your skills,</i> <br /> 
                    and verify your identity to unlock a <u><b>world of opportunities</b></u> 
                </h2>  
                <Button className='bg-black text-white w-36 mt-4'>Join Now</Button>
            </div>

            {/* portfolio section */}
            <div className="flex py-20 px-20">
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Showcase Your <br /> <b>Best Work.</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                    Simple Steps, Seamless Solutions. <br />
                    Navigate our user-friendly platform with ease, ensuring a smooth experience for both 
                    freelancers and clients.
                    </p>
                </div>
                <div className="basis-1/2">image</div>
            </div>

            {/* skills categorisation */}
            <div className="flex py-20 px-20">
                <div className="basis-1/2">image</div>
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Find Your <br /> <b>Niche.</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                        Categorize your skills, making it simple for clients to discover your expertise.
                    </p>
                </div>
            </div>

            {/* portfolio section */}
            <div className="flex py-20 px-20">
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Success<br /><b>Stories</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                        Hear from freelancers who have flourished on our platform. Your journey to success begins here.
                    </p>
                </div>
                <div className="basis-1/2">image</div>
            </div>
        </div>
    );
};

export default FreelancersPage;