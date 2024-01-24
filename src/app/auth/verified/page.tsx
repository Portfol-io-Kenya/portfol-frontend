"use client"
import Button from '@/components/UI/Button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Verified = () => {
    const searchParams = useSearchParams()
    const firstName = searchParams.get('name')
    return (
        <div>
            <p className="">
                Hello there <span className='capitalize font-semibold'>{firstName}!</span> Your account 
                has been successfully verified.
            </p>

            <Button
                className="flex justify-center mt-2 w-full rounded-xl bg-green-600 py-[12px] text-base font-medium \
                text-white transition duration-200 hover:bg-dark active:bg-dark  \
                hover:cursor-pointer"
            >
                <Link href='/find-work/jobs' className='indicator-label'>Explore Opportunities</Link>
            </Button>
        </div>
    );
};

export default Verified;