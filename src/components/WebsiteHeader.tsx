"use client"
import React from 'react';
import Logo from '@/public/media/portfol-logos/portfol-logo-black.png'
import Link from 'next/link';
import Image from 'next/image';
import HeaderMenu from './HeaderMenu';
import { useRouter } from 'next/navigation';
import Button from './UI/Button';

const MENU = [
    {name: 'Home', href: '/'},
    {name: 'About Us', href: '/about-us'},
    {name: 'How It Works', href: '/how-it-works'},
    {name: 'Freelancers', href: '/freelancers'},
    {name: 'Clients', href: '/clients'},
    // {name: 'Browse Jobs', href: '/browse-jobs'},
    // {name: 'Blog', href: '/blog'},
    {name: 'Contact Us', href: '/contact-us'},
]

const WebsiteHeader = () => {
    const router = useRouter();
    return (
        <div className='flex'>
            <div className="flex w-full basis-4/5 items-center">
                {/* logo */}
                <Link href={'/'}>
                    <Image 
                        src={Logo} 
                        alt='portfol-logo' 
                        width={100}
                        className='mr-10'
                    />
                </Link>

                {/* menu  */}
                <HeaderMenu links={MENU} />
            </div>
            <div className="basis-1/5 flex flex-col md:flex-row gap-3">
              <Button onClick={() => router.push('/auth/login')} className='px-16 bg-green-600 text-white'>
                Login | Signup
            </Button>
            </div>
        </div>
    );
};

export default WebsiteHeader;