import SectionHeader from '@/components/SectionHeader';
import WebSectionHeader from '@/components/WebSectionHeader';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='flex flex-col'>
            {/* header  */}
            <WebSectionHeader title='About Us' />

            {/* mission & vision */}
            <div className="flex py-40 px-20">
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Mission & <br /> <b>Vision</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                        {"At Portfolio, our mission is to connect the world with Africa's exceptional freelancers,\
                        fostering a global community of collaboration. Our vision is a future where talent knows \
                        no boundaries."}
                    </p>
                </div>
                <div className="basis-1/2">image</div>
            </div>

            <div className="flex flex-row-reverse py-40 px-20">
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Business <b>Model</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                        We operate on a transparent commission-based model, ensuring a fair exchange between 
                        freelancers and clients. Your success is our success.
                    </p>
                </div>
                <div className="basis-1/2">image</div>
            </div>

            <div className="flex py-40 px-20">
                <div className="basis-1/2">
                    <h2 className='text-3xl'>Road<b>map</b></h2>
                    <p className='text-gray-600 text-xl text-justify mt-5'>
                        Embarking on a journey to expand our reach beyond Africa. Join us as we pave the way for 
                        global collaboration.
                    </p>
                </div>
                <div className="basis-1/2">image</div>
            </div>
        </div>
    );
};

export default AboutPage;