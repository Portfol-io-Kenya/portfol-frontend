import Button from '@/components/UI/Button';
import React from 'react';

const ClientsPage = () => {
    return (
        <div className='flex flex-col'>
            {/* connect  */}
            <div className='p-20 flex flex-col items-center rounded-lg bg-white mx-5 mt-5'>
                <h2 className='text-center text-3xl px-20'>
                    Start <i>Your <b>Project.</b></i> <br /> 
                    Create a client account, share <i>project details,</i> <br /> and connect with 
                    the <u><b>perfect freelancer.</b></u> 
                </h2>  
                <Button className='bg-black text-white w-36 mt-4'>Join Now</Button>
            </div>

            {/* job posting */}
            <div className="flex py-20 px-20">
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Post With <br /> <b>Confidence.</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                        Clear instructions to effortlessly post your job and attract top-notch freelancers.
                    </p>
                </div>
                <div className="basis-1/2">image</div>
            </div>

            {/* search and filters */}
            <div className="flex py-20 px-20">
                <div className="basis-1/2">image</div>
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Find Your <br /> <b>Match.</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                        Tools to refine your search and discover freelancers with the skills you need.
                    </p>
                </div>
            </div>

            {/* client reviews */}
            <div className="flex py-20 px-20">
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Quality <br /><b>Assurance</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                        Rate and provide feedback on freelancers to build a community of excellence.
                    </p>
                </div>
                <div className="basis-1/2">image</div>
            </div>
        </div>
    );
};

export default ClientsPage;