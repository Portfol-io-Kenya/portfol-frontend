"use client"
import Button from '@/components/UI/Button';
import Link from 'next/link';
import React from 'react';

const Waitlist = () => {
    return (
        <div>
            <p className="">
                Hello there! You have successfully joined our waitlist.
            </p>

            <Button
                className="flex justify-center mt-2 w-full rounded-xl bg-afrogreen py-[12px] text-base font-medium \
                text-neutral transition duration-200 hover:bg-dark active:bg-dark  \
                hover:cursor-pointer"
            >
                <Link href='/' className='indicator-label'>Homepage</Link>
            </Button>
        </div>
    );
};

export default Waitlist;