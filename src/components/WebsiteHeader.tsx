import React from 'react';
import Logo from '@/public/media/portfol-logos/portfol-logo-black.png'
import Link from 'next/link';
import Image from 'next/image';
import HeaderMenu from './HeaderMenu';

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
    return (
        <div>
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
        </div>
    );
};

export default WebsiteHeader;