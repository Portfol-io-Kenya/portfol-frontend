import React from 'react';
import HeaderMenu from './HeaderMenu';
import Avatar from './UI/Avatar';
import Image from 'next/image';
import Logo from '@/public/media/portfol-logos/portfol-logo-black.png'
import Link from 'next/link';
import AccountDropdown from './UI/dropdowns/AccountDropdown';

const MENU = [
    {name: 'Find Work', href: '/find-work/jobs'},
    {name: 'Proposals', href: '/find-work/proposals'},
    {name: 'Reports', href: '/find-work/reports'},
    {name: 'Candidates', href: '/find-work/candidates/1'},
    {name: 'Employers', href: '/find-work/employers/1'},
]

const Header = () => {
    
    return (
        <section className="sticky top-3 bg-white/70 backdrop-blur flex py-2 px-2 rounded-md z-50">
                {/* col 1  */}
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

                {/* col 2  */}
                <div className="basis-1/5 flex justify-end">
                    {/* notifications */}

                    {/* avatar */}
                    <AccountDropdown />
                    
                </div>
                
            </section>
    );
};

export default Header;